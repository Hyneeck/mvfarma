
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Produce from '../components/Produce';
import Journal from '../components/Journal';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Produce />
      <Journal />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
