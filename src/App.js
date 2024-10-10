import React from 'react';

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="gallery"><GallerySection /></section>
      <section id="skills"><Skills /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="interview"><Interview /></section>
      <section id="contact"><Contact /></section>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
