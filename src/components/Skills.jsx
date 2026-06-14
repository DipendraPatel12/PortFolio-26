import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const skills = [
    { name: 'HTML', img: '/assets/img/html.png' },
    { name: 'CSS', img: '/assets/img/css.png' },
    { name: 'JavaScript', img: '/assets/img/Javascript.png' },
    { name: 'React', img: '/assets/img/react.png' },
    { name: 'JSON', img: '/assets/img/JSON.png' },
    { name: 'Tailwind', img: '/assets/img/tail.png' },
    { name: 'Node.js', img: '/assets/img/nodejs.png' },
    { name: 'Express', img: '/assets/img/express.jpeg' },
    { name: 'MongoDB', img: '/assets/img/mongodb.jpeg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PgSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Redux Toolkit', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Sequelize', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg' },
    { name: 'Redis', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  ];

  return (
    <section id="skills" className="skills" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="section-title">
          <h2>Skills / Tools</h2>
        </div>
        <div className="row skills-content justify-content-center">
          {skills.map((skill, index) => (
            <motion.div 
              className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex flex-column align-items-center justify-content-center mb-5" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={20} 
                tiltMaxAngleY={20} 
                perspective={800} 
                transitionSpeed={1000} 
                scale={1.1} 
                gyroscope={true}
                glareEnable={true} 
                glareMaxOpacity={0.4} 
                glareColor="#ffffff" 
                glarePosition="all" 
                glareBorderRadius="30px"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-panel hover-glow" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '30px', transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}>
                  <img src={skill.img} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'translateZ(40px)' }} />
                </div>
              </Tilt>
              <span style={{ marginTop: '15px', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '1px' }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
