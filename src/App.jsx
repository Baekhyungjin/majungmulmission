import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingAudio from './components/FloatingAudio';
import './index.css';

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Ministries />
        <Location />
      </main>
      <Footer />
      <FloatingAudio />
    </div>
  );
}

export default App;
