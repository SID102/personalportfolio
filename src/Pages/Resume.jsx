import React from 'react';

const Resume=()=>{
  const resumeUrl="https://drive.google.com/file/d/1b8rxOs0vrc-Hxk6dX9syNJEu2jUKHrLo/view?usp=sharing";
  return(
    <div>
    <a href={resumeUrl} target="_blank" rel="noreferrer">View Resume</a>
    <a href={resumeUrl} download>Download Resume</a>
    </div>
  );
};

export default Resume;