// Card.js
import React from 'react';
import {GiAmericanFootballHelmet} from 'react-icons/gi';
const Card = ({ title, icon1 }) => {
  const icon3=icon1;
  return (
    <div className="card custom-card">
      <div className="card-body">
      <GiAmericanFootballHelmet  size="20"/> <b style={{fontSize:'15px'}}>{title}</b>
      </div>
    </div>
  );
};

export default Card;
