
import MVFarmaHero from "@/components/MVFarmaHero";
import MVFarmaStory from "@/components/MVFarmaStory";
import MVFarmaProduce from "@/components/MVFarmaProduce";
import MVFarmaGallery from "@/components/MVFarmaGallery";
import MVFarmaBlog from "@/components/MVFarmaBlog";
import MVFarmaInstagram from "@/components/MVFarmaInstagram";
import MVFarmaContact from "@/components/MVFarmaContact";
import MVFarmaFooter from "@/components/MVFarmaFooter";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO 
        title="MV Farma - Rodinná včelí farma v Novém Bydžově"
        description="Rodinná včelí farma MV Farma v Novém Bydžově. Prodáváme kvalitní med a včelí produkty. Dlouhá tradice včelařství."
      />
      <MVFarmaHero />
      <MVFarmaStory />
      <MVFarmaProduce />
      <MVFarmaGallery />
      <MVFarmaBlog />
      <MVFarmaInstagram />
      <MVFarmaContact />
      <MVFarmaFooter />
    </>
  );
};

export default HomePage;
