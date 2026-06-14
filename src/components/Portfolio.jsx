import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
  const projects = [
    {
      title: 'RoomFinder',
      tech: 'React.js, Node.js, Express.js, MongoDB',
      link: 'https://finder-pi-lilac.vercel.app/',
      features: [
        'Search for rooms locally and outside with advanced filters.',
        'Modern, highly responsive design.',
        'React Router declarative routing for seamless navigation.'
      ]
    },
    {
      title: 'Ecommerce Website',
      tech: 'Reactjs, Redux, REST API',
      link: '#',
      features: [
        'Dynamic product fetching via custom REST API.',
        'Persistent shopping cart functionality.',
        'Redux Toolkit for centralized state management.'
      ]
    },
    {
      title: 'Blog Website',
      tech: 'MERN Stack (MongoDB, Express, React, Node)',
      link: '#',
      features: [
        'Full CRUD operations for blog posts.',
        'Dynamic author feeds and specific user pages.',
        'RESTful API backend for seamless data communication.'
      ]
    }
  ];

  return (
    <section id="portfolio" className="portfolio" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              className="col-lg-4 col-md-6 mb-5"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltEnable={typeof window !== 'undefined' ? window.matchMedia('(hover: hover)').matches : true}
                className="h-100"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.05}
                gyroscope={false}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-panel hover-glow h-100" style={{ display: 'flex', flexDirection: 'column', padding: '30px', transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                  <h4 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '10px', transform: 'translateZ(50px)' }}>{project.title}</h4>
                  <h6 className="text-gradient" style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '20px', transform: 'translateZ(40px)' }}>{project.tech}</h6>

                  <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '1rem', flexGrow: 1, marginBottom: '30px', transform: 'translateZ(30px)' }}>
                    {project.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '10px' }}>{feature}</li>
                    ))}
                  </ul>

                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={{
                      marginTop: 'auto',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                      color: '#fff',
                      fontWeight: 600,
                      textAlign: 'center',
                      textDecoration: 'none',
                      transform: 'translateZ(60px)'
                    }}>
                      View Live <i className="bi bi-box-arrow-up-right ms-2"></i>
                    </a>
                  )}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
