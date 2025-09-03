import React, { useEffect } from 'react';
import { generateKeywords } from '../utils/seoKeywords';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = '/lovable-uploads/hero-background.webp',
  url = 'https://mvfarma.cz',
  type = 'website',
  author = 'MVFarma',
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const enhancedKeywords = keywords ? keywords : generateKeywords();
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Set document language
    document.documentElement.lang = 'cs';
    
    // Update meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', enhancedKeywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Czech localization meta tags
    updateMetaTag('language', 'cs');
    updateMetaTag('geo.region', 'CZ-10'); // Prague Region
    updateMetaTag('geo.placename', 'Prague');
    updateMetaTag('geo.position', '50.0755;14.4378'); // Prague coordinates
    updateMetaTag('ICBM', '50.0755, 14.4378');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('revisit-after', '7 days');
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${url}${image}`, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'MVFarma', true);
    updateMetaTag('og:locale', 'cs_CZ', true);
    updateMetaTag('og:locale:alternate', 'cs', true);
    updateMetaTag('og:country-name', 'Czech Republic', true);
    updateMetaTag('og:region', 'Prague', true);
    
    // Czech business specific Open Graph
    if (type === 'website') {
      updateMetaTag('og:latitude', '50.0755', true);
      updateMetaTag('og:longitude', '14.4378', true);
      updateMetaTag('og:street-address', 'Prague', true);
      updateMetaTag('og:locality', 'Prague', true);
      updateMetaTag('og:region', 'Prague', true);
      updateMetaTag('og:postal-code', '504 01', true);
      updateMetaTag('og:country-name', 'Czech Republic', true);
    }
    
    // Article specific tags
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
      updateMetaTag('article:author', author, true);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${url}${image}`);
    updateMetaTag('twitter:url', url);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Preconnect to external domains
    const preconnectDomains = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'];
    preconnectDomains.forEach(domain => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`) as HTMLLinkElement;
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = domain;
        document.head.appendChild(preconnect);
      }
    });
  }, [title, description, enhancedKeywords, image, url, type, author, publishedTime, modifiedTime]);

  return null;
};

export default SEO;
