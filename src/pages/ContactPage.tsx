
import MVFarmaHeader from "@/components/MVFarmaHeader";
import MVFarmaContact from "@/components/MVFarmaContact";
import MVFarmaFooter from "@/components/MVFarmaFooter";
import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Kontakt - MV Farma"
        description="Kontaktujte nás na MV Farma v Novém Bydžově. Informace o otevírací době, adrese a možnostech nákupu medu."
      />
      <MVFarmaHeader />
      <MVFarmaContact />
      <MVFarmaFooter />
    </>
  );
};

export default ContactPage;
