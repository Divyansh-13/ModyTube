const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API route to get song recommendations
app.post("/api/songs", async (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({ error: "Sentence is required" });
  }

  // A simple query created from the user's input
  const query = `${sentence} music`;

  try {
    // Search YouTube for songs related to the mood
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults: 20,
          key: process.env.YOUTUBE_API_KEY, // This reads the key from Vercel's settings
        },
      }
    );

    // Format the response to be cleaner for the frontend
    const videos = response.data.items.map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));

    res.json({ videos });
  } catch (error) {
    console.error("Error fetching from YouTube API:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: "Failed to fetch songs from YouTube. Check if the API key is valid and has access." });
  }
});

// Vercel handles starting the server, so we only need to export the app.
module.exports = app;

