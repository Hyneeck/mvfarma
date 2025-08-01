
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { title: "Morning Harvest", description: "Fresh vegetables collected at sunrise" },
    { title: "Soil Preparation", description: "Working compost into raised beds" },
    { title: "Greenhouse Seedlings", description: "Young plants ready for transplant" },
    { title: "Farm Team", description: "Sarah and Mike tending to crops" },
    { title: "Seasonal Bounty", description: "Summer's peak harvest display" },
    { title: "Community Gathering", description: "CSA members visiting the farm" },
    { title: "Cover Crops", description: "Winter soil protection and enrichment" },
    { title: "Farm Store", description: "Fresh produce available for pickup" },
    { title: "Bee Partnership", description: "Pollinators working our flowers" }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="py-[clamp(2rem,6vw,6rem)] bg-[#F5F5DC]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D5530] mb-6">Farm Life Gallery</h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Take a visual journey through our seasons. From early morning harvests to community gatherings, 
              these moments capture the heart of sustainable farming and the beauty of working with nature.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 50}>
              <div
                className="aspect-square bg-gradient-to-br from-[#2D5530] to-[#C65D00] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group opacity-80"
                onClick={() => openModal(index)}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="text-center text-white z-10 p-4">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-in">
          <div className="text-center mt-12">
            <p className="text-[#666] mb-6">
              Follow our daily farm life and seasonal updates on social media
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#2D5530] text-white px-6 py-3 rounded-lg hover:bg-[#1a3220] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium min-h-[48px]">
                Follow on Instagram
              </button>
              <button className="border-2 border-[#C65D00] text-[#C65D00] px-6 py-3 rounded-lg hover:bg-[#C65D00] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium min-h-[48px]">
                Facebook Page
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors duration-200"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-[90vh] w-full">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#2D5530] to-[#C65D00] rounded-lg flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-4">{images[selectedImage].title}</h3>
                <p className="text-lg opacity-90">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
