import React from 'react';
import './Payment.css'; 
import { useNavigate,useLocation } from 'react-router-dom';
import {useState} from 'react';


const Payment = () => {
  const [formData, setFormData] = useState({
    cardnumber: '3333 4444 9012',
    expiry:"01/22",
    cvv:"123",
  });
  const location = useLocation();
  const navigate = useNavigate(); 
  const { state } = location;
  const name = state && state.name;
  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      let response = await fetch('https://mindfullbliss.onrender.com/api/makepayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if(response.ok){
        navigate("/thanks",{ state: { name } });
      }
      else{
          navigate("/error");
      }
    }catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };

  return (
    <div className="payment-container">
      <h1>Make Your Payment Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input type="text" placeholder="3333 4444 9012" />
        </label>
        <label>
          Expiry Date:
          <input type="text" placeholder="01/22" />
        </label>
        <label>
          CVV:
          <input type="text" placeholder="123" />
        </label>
        <p>for now use this data and proceed 👇</p>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
