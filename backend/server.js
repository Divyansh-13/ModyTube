const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mood extraction logic
const extractMood = (sentence) => {
  const moodKeywords = {
    happy: [
      'happy', 'joy', 'excited', 'cheerful', 'elated', 'glad', 'content', 
      'delighted', 'ecstatic', 'euphoric', 'blissful', 'jubilant', 'overjoyed', 
      'radiant', 'thrilled', 'upbeat', 'exhilarated', 'buoyant'
    ],
    sad: [
      'sad', 'alas', 'depressed', 'unhappy', 'melancholy', 'miserable', 'gloomy', 
      'downcast', 'despondent', 'dismal', 'blue', 'forlorn', 'heartbroken', 
      'grief-stricken', 'woeful', 'sorrowful', 'morose', 'dejected'
    ],
    energetic: [
      'energetic', 'enthusiastic', 'pumped', 'active', 'lively', 'vibrant', 'dynamic', 
      'exuberant', 'high-spirited', 'vigorous', 'animated', 'zesty', 'peppy', 
      'bubbly', 'electrified', 'spirited', 'robust', 'hyper'
    ],
    calm: [
      'calm', 'relaxed', 'peaceful', 'serene', 'tranquil', 'composed', 'soothing', 
      'placid', 'quiet', 'mellow', 'untroubled', 'undisturbed', 'harmonious', 
      'laid-back', 'equanimous', 'collected', 'contented', 'restful'
    ]
  };

  const lowerCaseSentence = sentence.toLowerCase();
  for (const [mood, keywords] of Object.entries(moodKeywords)) {
    if (keywords.some((keyword) => lowerCaseSentence.includes(keyword))) {
      return mood;
    }
  }

  return 'calm'; // Default mood
};

// Mood to YouTube search query mapping
const moodQueries = {
  happy: 'happy bollywood and hollywood music',
  sad: 'sad bollywood and hollywood music',
  energetic: 'energetic bollywood and hollywood music',
  calm: 'calm bollywood and hollywood music',
};

// Endpoint to get YouTube songs based on mood
app.post('/api/songs', async (req, res) => {
  const { sentence } = req.body;

  if (!sentence) {
    return res.status(400).json({ error: 'Please enter a sentence' });
  }

  // Extract mood from the sentence
  const mood = extractMood(sentence);
  const query = moodQueries[mood];

  try {
    // Search YouTube for songs related to the mood
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: 20, // Fetch 5 songs
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    // Extract video details
    const videos = response.data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: item.snippet.thumbnails.default.url, // Thumbnail URL
    }));

    // Send videos to the frontend
    res.json({ videos });
  } catch (error) {
    console.error("YouTube API Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});