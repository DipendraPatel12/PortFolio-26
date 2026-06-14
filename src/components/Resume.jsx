import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="resume" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="section-title">
          <h2>Resume</h2>
        </div>
        <div className="row justify-content-center">
          <motion.div 
            className="col-lg-8 glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gradient" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>Education</h3>
            
            <div className="resume-item" style={{ padding: '0 0 30px 30px', borderLeft: '2px solid var(--primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', left: '-11px', top: '0', background: 'var(--bg-color)', border: '4px solid var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>Bachelor of Technology in Computer Science</h4>
              <h5 style={{ fontSize: '1rem', background: 'rgba(255,95,31,0.1)', color: 'var(--primary)', padding: '8px 20px', borderRadius: '50px', display: 'inline-block', fontWeight: 600, marginBottom: '15px' }}>2020 - 2024</h5>
              <h6 style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>University - RGPV</h6>
              <p style={{ color: 'var(--text-muted)' }}><em>Sushila Devi Bansal College of Technology, Indore MP</em></p>
            </div>
            
            <div className="resume-item" style={{ padding: '0 0 30px 30px', borderLeft: '2px solid var(--primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', left: '-11px', top: '0', background: 'var(--bg-color)', border: '4px solid var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>HSC</h4>
              <h5 style={{ fontSize: '1rem', background: 'rgba(255,95,31,0.1)', color: 'var(--primary)', padding: '8px 20px', borderRadius: '50px', display: 'inline-block', fontWeight: 600, marginBottom: '15px' }}>2019 - 2020</h5>
              <h6 style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Board - M.P. Board</h6>
              <p style={{ color: 'var(--text-muted)' }}><em>Vimala Convent Higher Secondary School, Sanawad</em></p>
            </div>
            
            <div className="resume-item" style={{ padding: '0 0 0 30px', borderLeft: '2px solid var(--primary)', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '20px', height: '20px', borderRadius: '50%', left: '-11px', top: '0', background: 'var(--bg-color)', border: '4px solid var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>SSC</h4>
              <h5 style={{ fontSize: '1rem', background: 'rgba(255,95,31,0.1)', color: 'var(--primary)', padding: '8px 20px', borderRadius: '50px', display: 'inline-block', fontWeight: 600, marginBottom: '15px' }}>2017 - 2018</h5>
              <h6 style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Board - M.P. Board</h6>
              <p style={{ color: 'var(--text-muted)' }}><em>Vimala Convent Higher Secondary School, Sanawad</em></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
