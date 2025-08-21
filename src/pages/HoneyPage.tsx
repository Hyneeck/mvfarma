
import MVFarmaHeader from "@/components/MVFarmaHeader";
import MVFarmaProduce from "@/components/MVFarmaProduce";
import MVFarmaFooter from "@/components/MVFarmaFooter";
import SEO from "@/components/SEO";

const HoneyPage = () => {
  return (
    <>
      <SEO 
        title="Medy a včely - MV Farma"
        description="Kvalitní květový med a včelí produkty z naší rodinné farmy MV Farma v Novém Bydžově."
      />
      <MVFarmaHeader />
      <MVFarmaProduce />
      <MVFarmaFooter />
    </>
  );
};

export default HoneyPage;
