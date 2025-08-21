
import { Link } from "react-router-dom";
import { MVFarmaFooter } from "@/components/MVFarmaFooter";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Stránka nenalezena - MV Farma"
        description="Požadovaná stránka nebyla nalezena na webu MV Farma."
      />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-yellow-50 to-amber-50">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stránka nenalezena</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Omlouváme se, ale stránka kterou hledáte neexistuje nebo byla přesunuta.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
        <MVFarmaFooter />
      </div>
    </>
  );
};

export default NotFound;
