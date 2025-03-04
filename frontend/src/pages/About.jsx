import React from "react";
import { Music2, Headphones, Radio, Users, Star, Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const features = [
    {
      icon: <Music2 className="w-6 h-6" />,
      title: "Millions of Tracks",
      description: "Access a vast library of songs across all genres and eras."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "High Quality Audio",
      description: "Experience music in crystal clear, studio-quality sound."
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Personalized Radio",
      description: "Discover new music tailored to your unique taste."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Michael Chen",
      role: "Head of Music",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Alex Rivera",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        
        <div className="relative pt-24 pb-16">
          {/* Hero Section */}
          <section className="text-center px-4 mb-24">
            <div className="max-w-3xl mx-auto">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Redefining Your Music Experience
                </h1>
                <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                  We're on a mission to bring music lovers the most immersive and 
                  personalized listening experience ever created.
                </p>
                <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-lg rounded-full py-3 px-6 max-w-max mx-auto">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">Trusted by over 1 million music lovers worldwide</span>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-4 mb-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10
                           hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-6
                                group-hover:bg-white/20 transition-all duration-300">
                    {React.cloneElement(feature.icon, { className: "w-7 h-7 text-white" })}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="px-4 mb-24">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-white mb-3">10M+</div>
                  <div className="text-gray-400 text-lg">Songs Available</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-white mb-3">180+</div>
                  <div className="text-gray-400 text-lg">Countries Served</div>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-white mb-3">1M+</div>
                  <div className="text-gray-400 text-lg">Active Users</div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="px-4 mb-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-16">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10
                             text-center hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden
                                  ring-4 ring-white/10 group-hover:ring-white/20 transition-all duration-300">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="px-4 mb-16">
            <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <h2 className="text-3xl font-bold text-white">Our Values</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                We believe in the power of music to connect, inspire, and transform. 
                Our platform is built on the principles of accessibility, quality, 
                and respect for artists and listeners alike.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;