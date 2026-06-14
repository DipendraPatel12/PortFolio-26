import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="row glass-panel" style={{ alignItems: 'center', margin: 0 }}>
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/assets/img/dsp.jpg" className="img-fluid" alt="Dipendra Singh Patel" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '20px', border: '1px solid var(--glass-border)' }} />
          </motion.div>
          <motion.div
            className="col-lg-8 pt-4 pt-lg-0 content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ paddingLeft: '30px' }}
          >
            <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>Fullstack Developer</h3>
            <p className="fst-italic" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              A passionate developer dedicated to crafting clean, efficient, and user-friendly websites and mobile applications. With 1 year of experience in the field, I thrive on tackling challenges and bringing innovative solutions to the digital landscape.
            </p>
            <div className="row mt-4 mb-4">
              <div className="col-lg-6">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><i className="bi bi-chevron-right text-gradient"></i> <strong>Birthday:</strong> <span style={{ color: 'var(--text-muted)' }}>14 June 2002</span></li>
                  <li style={{ marginBottom: '15px' }}><i className="bi bi-chevron-right text-gradient"></i> <strong>Phone:</strong> <span style={{ color: 'var(--text-muted)' }}>+91 7828071926</span></li>
                  <li style={{ marginBottom: '15px' }}><i className="bi bi-chevron-right text-gradient"></i> <strong>City:</strong> <span style={{ color: 'var(--text-muted)' }}>Bhopal, Madhya Pradesh</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '15px' }}><i className="bi bi-chevron-right text-gradient"></i> <strong>Degree:</strong> <span style={{ color: 'var(--text-muted)' }}>B.Tech (CSE)</span></li>
                  <li style={{ marginBottom: '15px' }}><i className="bi bi-chevron-right text-gradient"></i> <strong>Email:</strong> <span style={{ color: 'var(--text-muted)' }}>dipendrapatel926@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              I specialize in Fullstack development, where I blend creativity with technical expertise to design visually stunning websites and cross-platform mobile applications. From frontend frameworks to robust backend solutions, I enjoy translating design concepts into functional and intuitive user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
