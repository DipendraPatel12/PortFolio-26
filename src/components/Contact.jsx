import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1 glass-panel" style={{ padding: '40px', margin: 0 }}>
          <motion.div 
            className="col-lg-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info" style={{ width: '100%' }}>
              <div className="address" style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-geo-alt hover-glow" style={{ fontSize: '24px', color: 'var(--primary)', width: '60px', height: '60px', flexShrink: 0, background: 'rgba(255, 95, 31, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', marginRight: '20px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px', color: 'var(--text-main)' }}>Location</h4>
                  <p style={{ marginBottom: 0, fontSize: '1rem', color: 'var(--text-muted)' }}>Bhopal, Madhya Pradesh</p>
                </div>
              </div>

              <div className="email" style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-envelope hover-glow" style={{ fontSize: '24px', color: 'var(--primary)', width: '60px', height: '60px', flexShrink: 0, background: 'rgba(255, 95, 31, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', marginRight: '20px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px', color: 'var(--text-main)' }}>Email</h4>
                  <p style={{ marginBottom: 0, fontSize: '1rem', color: 'var(--text-muted)' }}>dipendrapatel926@gmail.com</p>
                </div>
              </div>

              <div className="phone" style={{ display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-phone hover-glow" style={{ fontSize: '24px', color: 'var(--primary)', width: '60px', height: '60px', flexShrink: 0, background: 'rgba(255, 95, 31, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', marginRight: '20px' }}></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px', color: 'var(--text-main)' }}>Call</h4>
                  <p style={{ marginBottom: 0, fontSize: '1rem', color: 'var(--text-muted)' }}>+91 7828071926</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="col-lg-8 mt-5 mt-lg-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117304.0935513904!2d77.33466474136611!3d23.254688094766023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1738131599938!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: '350px', borderRadius: '20px', filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
