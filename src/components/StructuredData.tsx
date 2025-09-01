import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Product' | 'Article' | 'BlogPosting' | 'WebPage';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Remove existing structured data for this type
    const existingScript = document.querySelector(`script[data-type="${type}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', type);
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(`script[data-type="${type}"]`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;