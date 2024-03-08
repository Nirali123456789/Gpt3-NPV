import React from 'react'
import './cta.css';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
 
  const handleClick = () => {
    setTimeout(() => {
      navigate('/signup');
    }, 300);
  };
  return (
    <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={handleClick}>Get Started</button>
    </div>
  </div>
  )
}

export default CTA
