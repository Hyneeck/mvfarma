
import { MVFarmaHeader } from "@/components/MVFarmaHeader";
import { MVFarmaGallery } from "@/components/MVFarmaGallery";
import { MVFarmaFooter } from "@/components/MVFarmaFooter";
import { SEO } from "@/components/SEO";

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="Fotogalerie - MV Farma"
        description="Prohlédněte si fotogalerii naší včelí farmy MV Farma v Novém Bydžově. Fotky včel, úlů a našeho medu."
      />
      <MVFarmaHeader />
      <MVFarmaGallery />
      <MVFarmaFooter />
    </>
  );
};

export default GalleryPage;
