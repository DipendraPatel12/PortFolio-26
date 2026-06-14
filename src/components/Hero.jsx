import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        className="container glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '800px', backdropFilter: 'blur(16px)' }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '20px' }}>Dipendra Singh Patel</h1>
        <p style={{ fontSize: '2rem', fontWeight: 300, color: '#e0e0e0' }}>
          I'm{' '}
          <span className="text-gradient" style={{ fontWeight: 600 }}>
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                2000,
                'Website Developer',
                2000,
                'Mobile App Developer',
                2000,
                'MERN Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </p>
        <div className="mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <motion.a
            href="#portfolio"
            className="btn hover-glow"
            style={{
              borderRadius: '50px',
              padding: '15px 40px',
              border: '2px solid var(--primary)',
              color: 'var(--text-main)',
              fontSize: '1.2rem',
              fontWeight: 600,
              background: 'rgba(255, 95, 31, 0.1)',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="btn hover-glow"
            style={{
              borderRadius: '50px',
              padding: '15px 40px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'var(--text-main)',
              fontSize: '1.2rem',
              fontWeight: 600,
              background: 'transparent',
              textDecoration: 'none'
            }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
