import React, { useState } from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaFooter from '../components/MVFarmaFooter';
import ScrollAnimation from '../components/ScrollAnimation';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/placeholder.svg",
      alt: "Včely na plástech",
      title: "Včely pracující na plástech",
      description: "Naše včely při práci na stavbě nových plástů"
    },
    {
      src: "/placeholder.svg",
      alt: "Včelnice v krajině",
      title: "Včelnice v přírodě",
      description: "Úly rozmístěné v krásné krajině Českomoravské vrchoviny"
    },
    {
      src: "/placeholder.svg",
      alt: "Stáčení medu",
      title: "Proces stáčení medu",
      description: "Tradiční postupy zpracování medu"
    },
    {
      src: "/placeholder.svg",
      alt: "Květiny pro včely",
      title: "Pastva pro včely",
      description: "Bohaté květinové louky poskytují včelám výživu"
    },
    {
      src: "/placeholder.svg",
      alt: "Včelař při práci",
      title: "Péče o včelstva",
      description: "Kontrola a údržba včelích úlů"
    },
    {
      src: "/placeholder.svg",
      alt: "Med v sklenicích",
      title: "Hotový produkt",
      description: "Náš kvalitní med připravený pro zákazníky"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/lovable-uploads/1839b982-5e8a-4e50-a8e5-65b9733411f4.png')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-5 relative z-10 text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Naše fotogalerie
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Prohlédněte si život našich včel a krásu naší farmy
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-[clamp(2rem,6vw,6rem)] bg-background">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <div 
                  className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openLightbox(image.src)}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent to-secondary relative overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <MVFarmaFooter />
    </div>
  );
};

export default GalleryPage;