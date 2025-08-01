
import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Journal = () => {
  const posts = [
    {
      title: "Winter Soil Preparation: Building Tomorrow's Harvest",
      excerpt: "As the growing season winds down, we're already thinking about next year. Learn how cover crops and composting prepare our soil for another abundant season.",
      author: "Sarah",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Soil Health"
    },
    {
      title: "Recipe: Roasted Root Vegetable Medley",
      excerpt: "Make the most of winter storage crops with this warming, nutritious recipe that celebrates the earthy flavors of carrots, beets, and turnips.",
      author: "Mike", 
      date: "December 10, 2024",
      readTime: "3 min read",
      category: "Recipes"
    },
    {
      title: "The Hidden Life of Soil: What's Happening Underground",
      excerpt: "Discover the incredible ecosystem beneath your feet. From mycorrhizal networks to beneficial bacteria, soil is alive with activity.",
      author: "Sarah",
      date: "December 5, 2024", 
      readTime: "7 min read",
      category: "Education"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Soil Health': return 'bg-[#2D5530] text-white';
      case 'Recipes': return 'bg-[#C65D00] text-white';
      case 'Education': return 'bg-[#666] text-white';
      default: return 'bg-[#F5F5DC] text-[#333]';
    }
  };

  return (
    <section id="journal" className="py-[clamp(2rem,6vw,6rem)] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D5530] mb-6">Farm Journal</h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Stories from the field, seasonal recipes, and growing wisdom. Follow our journey through the seasons 
              and discover the deeper connections between soil, plants, and community.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <article className="bg-[#F5F5DC]/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="aspect-[16/9] bg-gradient-to-br from-[#2D5530] to-[#C65D00] opacity-20 flex items-center justify-center">
                  <span className="text-white text-lg font-medium opacity-60">Article Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#333] mb-3 group-hover:text-[#2D5530] transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#666] mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-[#666]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[#E5E5E5]">
                    <button className="text-[#2D5530] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="text-center">
            <button className="bg-[#2D5530] text-white px-8 py-4 rounded-lg hover:bg-[#1a3220] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium text-lg min-h-[48px]">
              View All Posts
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Journal;
