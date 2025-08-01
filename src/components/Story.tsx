
import React from 'react';
import { Heart, Sprout, Users } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Story = () => {
  const values = [
    {
      icon: <Sprout className="w-12 h-12 text-[#2D5530]" />,
      title: "Regenerative Agriculture",
      description: "We build soil health and biodiversity with every season, creating a thriving ecosystem that supports both plants and wildlife."
    },
    {
      icon: <Heart className="w-12 h-12 text-[#C65D00]" />,
      title: "Community Connection",
      description: "Food connects us all. We're building relationships that go beyond transactions, creating a community around sustainable living."
    },
    {
      icon: <Users className="w-12 h-12 text-[#2D5530]" />,
      title: "Transparency",
      description: "See exactly how your food grows. From seed to harvest, we share our methods, challenges, and celebrations with complete openness."
    }
  ];

  return (
    <section id="story" className="py-[clamp(2rem,6vw,6rem)] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D5530] mb-6">Our Story</h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Five years ago, we traded city life for 15 acres of possibility. What started as a dream to grow our own food 
              has become a mission to heal the land and nourish our community through regenerative farming practices.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimation animation="slide-in-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">From Urban to Rural</h3>
              <p className="text-[#666] mb-4 leading-relaxed">
                Sarah and Mike left their corporate careers to pursue a dream of sustainable farming. What began as weekend 
                gardening in their city backyard transformed into a certified organic operation spanning 15 acres of Oregon's 
                beautiful high desert.
              </p>
              <p className="text-[#666] mb-6 leading-relaxed">
                Every season brings new lessons in working with nature rather than against it. We've learned that healthy 
                soil grows healthy plants, which grow healthy communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-[#F5F5DC] p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-[#2D5530]">5</div>
                  <div className="text-sm text-[#666]">Years Growing</div>
                </div>
                <div className="bg-[#F5F5DC] p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-[#2D5530]">15</div>
                  <div className="text-sm text-[#666]">Acres Organic</div>
                </div>
                <div className="bg-[#F5F5DC] p-4 rounded-lg flex-1">
                  <div className="text-2xl font-bold text-[#2D5530]">200+</div>
                  <div className="text-sm text-[#666]">CSA Members</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <div className="aspect-[4/3] bg-[#F5F5DC] rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-[#2D5530] to-[#C65D00] opacity-20 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Farm Founders Photo</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center p-6 bg-[#F5F5DC]/30 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#333] mb-4">{value.title}</h4>
                  <p className="text-[#666] leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Story;
