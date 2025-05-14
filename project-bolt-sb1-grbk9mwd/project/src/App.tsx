import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Results from './components/Results';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-montserrat text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;