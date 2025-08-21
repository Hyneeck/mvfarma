
import MVFarmaHeader from "@/components/MVFarmaHeader";
import MVFarmaBlog from "@/components/MVFarmaBlog";
import MVFarmaFooter from "@/components/MVFarmaFooter";
import SEO from "@/components/SEO";

const BlogPage = () => {
  return (
    <>
      <SEO 
        title="Blog - MV Farma"
        description="Blog o včelařství, péči o včely a výrobě medu na naší rodinné farmě MV Farma v Novém Bydžově."
      />
      <MVFarmaHeader />
      <MVFarmaBlog />
      <MVFarmaFooter />
    </>
  );
};

export default BlogPage;
