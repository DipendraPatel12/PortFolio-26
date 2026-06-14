import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="footer" style={{ borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', color: 'var(--text-main)', textAlign: 'center', padding: '50px 0', marginTop: '100px' }}>
      <div className="container">
        <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 20px 0' }}>Dipendra Singh Patel</h3>
        
        <div className="social-links" style={{ margin: '0 0 40px 0', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <motion.a 
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/dipendra-singh-patel-623187210/" 
            target="_blank" 
            rel="noreferrer" 
            className="linkedin hover-glow" 
            style={{ fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--glass-bg)', color: 'var(--primary)', border: '1px solid var(--glass-border)', borderRadius: '50%', width: '50px', height: '50px', textDecoration: 'none' }}
          >
            <i className="bx bxl-linkedin"></i>
          </motion.a>
        </div>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Dipendra Singh Patel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
