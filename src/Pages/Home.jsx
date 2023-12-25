import React from 'react';
import '../Style/Home.css';
import siddharth from '../Images/sidd4.png';
import TechnologyCard from '../components/TechnologyCard';
import htmlicon from '../Icons/htmlicon.png';
import react from '../Icons/react.png';
import css from '../Icons/css.png';
import java from '../Icons/java.png';
import javascript from '../Icons/javascript.png';
import nodejs from '../Icons/nodejs.png';
import cicon from '../Icons/c-plus-plus.png';


const Home = () => {
  const technologies = [
    { name: 'REACT', icon: react },
    { name: 'javascript', icon: javascript },
    { name: 'nodejs', icon: nodejs },
    { name: 'java', icon: java },
    { name: 'css', icon: css },
    { name: 'HTML', icon: htmlicon },
    { name: 'cicon', icon: cicon }
    // Add more technologies here
  ];
  return (
    <div className='home'>
      <img className="image" src={siddharth} alt="My Image" />
      <div className='intro'>
      <h2 className='heading'>
        I'm Siddharth Singh.
      <br/>
        A Full Stack Developer.
      <br/>
      <div className='heading2'>On a French Based MNC THALES </div>
      </h2>
        <p>I'm probably the most passionate software engineer you will ever get to work with. If you have a great project that needs some amazing skill, I'm your guy.</p>
        <h3 style={{ display: 'flex',marginTop: '90px' , justifyContent: 'left', flexWrap: 'wrap' }}>Technologies:</h3>
        <div style={{ display: 'flex',marginTop: '30px' , justifyContent: 'left', flexWrap: 'wrap' }}>
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} name={tech.name} iconSrc={tech.icon} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
