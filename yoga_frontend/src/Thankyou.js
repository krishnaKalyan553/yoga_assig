import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import yoga from './yoga.png'
const Thankyou = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const name = state && state.name;
    const handleNavigateHome = () => {
        navigate('/');
    };
  return (    
    <div className='container'>
      <h1>Hello {name}, Welcome to our community </h1>
      <h4>Thank you for your payment. Your transaction was successful.</h4>
        <img src={yoga} alt="Thankyou"></img>
        <button onClick={handleNavigateHome}>Home</button>
        <p>Congratulations on unlocking a journey to inner strength and harmony through yoga. Your payment is a commitment to your well-being, and we're here to guide you on this transformative path. Namaste.</p>
    </div>
  );
};

export default Thankyou;
