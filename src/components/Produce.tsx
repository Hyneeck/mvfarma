
import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Produce = () => {
  const seasons = [
    {
      name: "Spring",
      items: "Lettuce, Spinach, Radishes, Peas, Herbs",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Summer", 
      items: "Tomatoes, Peppers, Cucumbers, Zucchini, Basil",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Fall",
      items: "Carrots, Beets, Kale, Squash, Brussels Sprouts", 
      color: "from-orange-600 to-yellow-600"
    },
    {
      name: "Winter",
      items: "Storage Crops, Microgreens, Preserved Goods",
      color: "from-blue-400 to-purple-500"
    }
  ];

  const csaBenefits = [
    "Weekly harvest box with 8-10 varieties",
    "Recipe cards and cooking tips included",
    "Priority access to farm workshops",
    "10% discount on additional farm products",
    "Flexibility to skip weeks when traveling"
  ];

  return (
    <section id="produce" className="py-[clamp(2rem,6vw,6rem)] bg-[#F5F5DC]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D5530] mb-6">Seasonal Produce & CSA</h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Experience the joy of eating seasonally with our Community Supported Agriculture program. 
              Fresh, nutrient-dense vegetables delivered weekly from our certified organic farm.
            </p>
          </div>
        </ScrollAnimation>

        {/* Seasonal Produce */}
        <ScrollAnimation animation="fade-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {seasons.map((season, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`h-24 bg-gradient-to-br ${season.color} flex items-center justify-center`}>
                    <h3 className="text-white text-2xl font-bold">{season.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#666] text-center leading-relaxed">{season.items}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>

        {/* CSA Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-in-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">Join Our CSA Community</h3>
              <p className="text-[#666] mb-6 leading-relaxed">
                Community Supported Agriculture connects you directly with your food source. Members receive weekly 
                boxes of the freshest seasonal produce while supporting sustainable farming practices.
              </p>
              
              <div className="space-y-3 mb-8">
                {csaBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#2D5530] mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-[#666]">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#2D5530] text-white px-6 py-3 rounded-lg hover:bg-[#1a3220] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium min-h-[48px] w-full sm:w-auto">
                  Join CSA Program
                </button>
                <button className="border-2 border-[#C65D00] text-[#C65D00] px-6 py-3 rounded-lg hover:bg-[#C65D00] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium min-h-[48px] w-full sm:w-auto">
                  View Sample Box
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-[#2D5530]" size={24} />
                  <h4 className="text-xl font-bold text-[#333]">Delivery Schedule</h4>
                </div>
                <p className="text-[#666] mb-2">Weekly deliveries every Thursday</p>
                <p className="text-[#666] mb-2">Season runs April through November</p>
                <p className="text-[#666]">Winter shares available December-March</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[#C65D00]" size={24} />
                  <h4 className="text-xl font-bold text-[#333]">Pickup Locations</h4>
                </div>
                <p className="text-[#666] mb-2">Downtown Bend Farmers Market</p>
                <p className="text-[#666] mb-2">Westside Community Center</p>
                <p className="text-[#666]">On-farm pickup available</p>
              </div>

              <div className="bg-[#2D5530] text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">2024 Season Pricing</h4>
                <p className="text-lg mb-1">Full Share (feeds 3-4): $28/week</p>
                <p className="text-lg">Half Share (feeds 1-2): $18/week</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Produce;
