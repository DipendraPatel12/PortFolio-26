import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Resume = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in CS",
      date: "2020 - 2024",
      institution: "Sushila Devi Bansal College of Technology, Indore MP",
      board: "University - RGPV",
      icon: "bx bxs-graduation"
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      date: "2019 - 2020",
      institution: "Vimala Convent Higher Secondary School, Sanawad",
      board: "Board - M.P. Board",
      icon: "bx bxs-school"
    },
    {
      title: "Secondary School Certificate (SSC)",
      date: "2017 - 2018",
      institution: "Vimala Convent Higher Secondary School, Sanawad",
      board: "Board - M.P. Board",
      icon: "bx bx-book-reader"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="resume" className="resume" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-title">
          <h2>Education</h2>
        </div>
        
        <motion.div 
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationData.map((edu, index) => (
            <motion.div className="col-lg-4 col-md-6" key={index} variants={itemVariants}>
              <Tilt tiltEnable={typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} style={{ height: '100%' }}>
              <div 
                className="glass-panel hover-glow" 
                style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  padding: '35px 30px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  cursor: 'default',
                  transform: 'translateZ(0)',
                  wordBreak: 'break-word'
                }}
              >
                {/* Decorative background glow element */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  background: 'var(--primary)',
                  opacity: 0.15,
                  borderRadius: '50%',
                  filter: 'blur(30px)',
                  zIndex: 0
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', zIndex: 1 }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    background: 'rgba(255, 95, 31, 0.1)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    border: '1px solid rgba(255, 95, 31, 0.2)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    <i className={edu.icon} style={{ fontSize: '32px', color: 'var(--primary)' }}></i>
                  </div>
                  <span style={{ 
                    background: 'var(--glass-bg)', 
                    color: 'var(--text-muted)', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1px solid var(--glass-border)',
                    letterSpacing: '0.5px'
                  }}>
                    {edu.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px', lineHeight: 1.4, zIndex: 1 }}>
                  {edu.title}
                </h3>
                
                <h6 style={{ fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', zIndex: 1 }}>
                  {edu.board}
                </h6>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 0, marginTop: 'auto', lineHeight: 1.6, zIndex: 1 }}>
                  {edu.institution}
                </p>
              </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
