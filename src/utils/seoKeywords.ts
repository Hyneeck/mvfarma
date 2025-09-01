// Enhanced SEO keywords for MVFarma
export const baseKeywords = [
  'včely',
  'farma', 
  'med',
  'mvfarma',
  'nový bydžov',
  'květový med',
  'tradice',
  'rodinná tradice',
  'včelařství',
  'medovicový med',
  'Českomoravská vrchovina',
  'bio med',
  'český med',
  'včelař',
  'úly',
  'nektar',
  'poctivý med',
  'tradiční výroba',
  'rodinný podnik',
  'kvalitní med',
  'přírodní med',
  'lokální produkce',
  'včelí produkty',
  'med ze střechy střední Evropy',
  'nektar ze stromů',
  'med z akátu',
  'včelařské tradice'
];

export const generateKeywords = (pageSpecificKeywords: string[] = []): string => {
  return [...baseKeywords, ...pageSpecificKeywords].join(', ');
};

export default {
  baseKeywords,
  generateKeywords
};