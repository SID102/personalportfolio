import React from 'react';

const TechnologyCard = ({ name,iconSrc }) => {
  return(
    <div style={{textAlign:'center',margin:'10px'}}>
      <img src={iconSrc} alt={name} style={{width:'60px',height:'60px'}} />
    </div>
  );
}

export default TechnologyCard;