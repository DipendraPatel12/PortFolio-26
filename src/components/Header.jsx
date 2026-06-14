import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 200;
      const sections = ['#hero', '#about', '#resume', '#services', '#portfolio', '#contact'];
      
      sections.forEach((section) => {
        const el = document.querySelector(section);
        if (el) {
          if (position >= el.offsetTop && position <= el.offsetTop + el.offsetHeight) {
            setActiveNav(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', icon: 'bx bx-home', text: 'Home' },
    { href: '#about', icon: 'bx bx-user', text: 'About' },
    { href: '#services', icon: 'bx bx-briefcase', text: 'Services' },
    { href: '#resume', icon: 'bx bx-file-blank', text: 'Resume' },
    { href: '#portfolio', icon: 'bx bx-book-content', text: 'Projects' },
    { href: '#contact', icon: 'bx bx-envelope', text: 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: '20px',
        left: '0',
        width: '100%',
        zIndex: 9997,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none' // Allow clicking through the empty space
      }}
    >
      <nav className="glass-panel" style={{ padding: '10px 30px', borderRadius: '50px', pointerEvents: 'auto' }}>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '30px' }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                style={{ 
                  color: activeNav === link.href ? '#FF5F1F' : '#ffffff', 
                  fontSize: '24px', 
                  transition: '0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title={link.text}
              >
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
