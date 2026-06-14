import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import './index.css';

function App() {
  const themes = [
    { primary: '#FF5F1F', secondary: '#0077FF' }, // Default (Orange/Blue)
    { primary: '#00FF00', secondary: '#FF00FF' }, // Cyberpunk (Green/Magenta)
    { primary: '#00B4D8', secondary: '#8338EC' }, // Ocean/Purple (Cyan/Purple)
    { primary: '#FF006E', secondary: '#FFBE0B' }, // Sunset (Pink/Yellow)
    { primary: '#8A2BE2', secondary: '#FF1493' }, // Purple Haze (BlueViolet/DeepPink)
  ];

  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    }, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  const currentTheme = themes[themeIndex];

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', currentTheme.primary);
    document.documentElement.style.setProperty('--secondary', currentTheme.secondary);
  }, [currentTheme]);

  return (
    <>
      {/* Global 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={['#050505']} />
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1.5} />
          <Scene3D theme={currentTheme} />
        </Canvas>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Hero />
        <main id="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <About />
          <Skills />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
