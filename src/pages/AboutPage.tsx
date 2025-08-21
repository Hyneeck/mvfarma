
import { MVFarmaHeader } from "@/components/MVFarmaHeader";
import { MVFarmaStory } from "@/components/MVFarmaStory";
import { MVFarmaFooter } from "@/components/MVFarmaFooter";
import { SEO } from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="O nás - MV Farma"
        description="Poznajte naši rodinnou včelí farmu MV Farma v Novém Bydžově. Naše dlouhá tradice včelařství a péče o včely."
      />
      <MVFarmaHeader />
      <MVFarmaStory />
      <MVFarmaFooter />
    </>
  );
};

export default AboutPage;
