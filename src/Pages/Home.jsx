import React from 'react';
import '../Style/Home.css';
import siddharth from '../Images/sidd.png';

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
