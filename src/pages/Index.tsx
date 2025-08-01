
import React from 'react';
import MVFarmaHeader from '../components/MVFarmaHeader';
import MVFarmaHero from '../components/MVFarmaHero';
import MVFarmaStory from '../components/MVFarmaStory';
import MVFarmaProduce from '../components/MVFarmaProduce';
import MVFarmaBlog from '../components/MVFarmaBlog';
import MVFarmaGallery from '../components/MVFarmaGallery';
import MVFarmaContact from '../components/MVFarmaContact';
import MVFarmaFooter from '../components/MVFarmaFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MVFarmaHeader />
      <MVFarmaHero />
      <MVFarmaStory />
      <MVFarmaProduce />
      <MVFarmaBlog />
      <MVFarmaGallery />
      <MVFarmaContact />
      <MVFarmaFooter />
    </div>
  );
};

export default Index;
