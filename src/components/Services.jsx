import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Building responsive, high-performance, and visually stunning websites tailored to your brand identity. From landing pages to full-scale web applications.',
      icon: 'bx bx-laptop'
    },
    {
      title: 'Mobile App Development',
      description: 'Crafting cross-platform mobile applications that provide seamless, native-like experiences on both iOS and Android using modern frameworks.',
      icon: 'bx bx-mobile-alt'
    },
    {
      title: 'Backend API Development',
      description: 'Designing and implementing robust, secure, and scalable RESTful APIs to power your applications and manage complex databases.',
      icon: 'bx bx-server'
    },
    {
      title: 'UI/UX Implementation',
      description: 'Translating beautiful designs and wireframes into fully functional, pixel-perfect, and highly interactive user interfaces.',
      icon: 'bx bx-paint'
    }
  ];

  return (
    <section id="services" className="services" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <motion.div
              className="col-lg-6 col-md-6 mb-5"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltEnable={typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true}
                className="h-100"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.02}
                gyroscope={false}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-panel hover-glow h-100" style={{ display: 'flex', alignItems: 'flex-start', padding: '40px', transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                  <div style={{
                    fontSize: '3rem',
                    color: 'var(--primary)',
                    marginRight: '25px',
                    background: 'rgba(255, 95, 31, 0.1)',
                    borderRadius: '15px',
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transform: 'translateZ(40px)'
                  }}>
                    <i className={service.icon}></i>
                  </div>
                  <div style={{ transformStyle: 'preserve-3d' }}>
                    <h4 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.4rem', marginBottom: '15px', transform: 'translateZ(50px)' }}>{service.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0, transform: 'translateZ(30px)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
