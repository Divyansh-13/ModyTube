import React, { useState } from "react";
import { Boxes } from "../components/ui/background-boxes";
import { Search, Music2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [sentence, setSentence] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchYouTubeRecommendations = async () => {
    if (!sentence.trim()) {
      setShowDropdown(false);
      setRecommendations([]);
      return;
    }

    setLoading(true);
    setRecommendations([]);

    try {
      const response = await fetch('http://localhost:5000/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch songs");
      }

      const data = await response.json();
      setRecommendations(data.videos);
      setShowDropdown(true);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchYouTubeRecommendations();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSentence(value);
    if (!value.trim()) {
      setShowDropdown(false);
      setRecommendations([]);
    }
  };

  return (
    <div className={`min-h-screen bg-black overflow-hidden`}>
      <Navbar />
      <div className={`relative flex flex-col items-center px-4 ${showDropdown && recommendations.length > 0 && sentence.trim() ? 'justify-start pt-20' : 'justify-center'} min-h-screen`}>
        <Boxes className="absolute inset-0" />
        
        <div className="relative w-full max-w-4xl mx-auto z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/5 rounded-full backdrop-blur-lg">
                <Music2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Mood Music</h1>
            </div>
            <p className="text-lg text-gray-300">
              Discover songs that match your current emotional state
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl mb-8 p-2">
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="text"
                value={sentence}
                onChange={handleInputChange}
                placeholder="How are you feeling?"
                className="w-full px-6 py-4 bg-black/20 rounded-full 
                          text-white placeholder-gray-400 text-lg
                          focus:outline-none focus:ring-2 focus:ring-white/30
                          transition-all duration-300"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 
                          p-2 bg-white/10 hover:bg-white/20 rounded-full
                          transition-all duration-300 disabled:opacity-50"
                disabled={loading || !sentence.trim()}
              >
                <Search className="w-6 h-6 text-white" />
              </button>
            </form>
          </div>

          {loading && (
            <div className="flex items-center justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              <span className="ml-3 text-white">Finding your perfect tracks...</span>
            </div>
          )}

          {showDropdown && recommendations.length > 0 && sentence.trim() && (
            <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-2 sticky top-0">
                  <Music2 className="w-5 h-5" />
                  Recommended Songs
                </h2>
                <div className="grid gap-4 max-h-[60vh] overflow-y-auto pr-2 
                              scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {recommendations.map((video, index) => (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg 
                                bg-black/20 hover:bg-black/30 
                                transition-all duration-300 group"
                    >
                      <div className="relative overflow-hidden rounded-lg min-w-[80px] md:min-w-[120px]">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full aspect-video object-cover 
                                   group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm md:text-base 
                                    line-clamp-2 break-words">
                          {video.title}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm mt-1 
                                    flex items-center gap-1">
                          <Music2 className="w-3 h-3" /> 
                          Watch on YouTube
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;