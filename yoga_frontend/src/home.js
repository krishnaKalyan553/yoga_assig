import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home(){
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    age:0,
    batch:'6-7AM',
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        let response = await fetch('https://mindfullbliss.onrender.com/api/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if(response.ok){
          let name = formData.name
          navigate("/payment",{ state: {name}});
        }
        else{
            navigate("/error");
        }
      } catch (error) {
        navigate("/error");
        console.error('Error submitting form:', error);
      }
      
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData)
  };
  // const handleSubmit = ()=>{console.log("submitted form to backend")};
  return (
  <div className="yoga-class-form">
  <h1>Register Now for Yoga Classes!</h1>
  <form method="post" onSubmit={handleSubmit}>
    <div className="field">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} required />
    </div>
    <div className="field">
      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" min="18" max="65" onChange={handleChange} required />
    </div>
    <div className="field">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} required />
    </div>
    <div className="field">
      <label htmlFor="batch">Choose Preferred Batch:</label>
      <select id="batch" name="batch" onChange={handleChange} required>
        <option value="6-7AM">6:00 AM - 7:00 AM</option>
        <option value="7-8AM">7:00 AM - 8:00 AM</option>
        <option value="8-9AM">8:00 AM - 9:00 AM</option>
        <option value="5-6PM">5:00 PM - 6:00 PM</option>
      </select>
    </div>
    <p>Monthly Fee: 500 INR</p>
    <button type="submit" >Pay & Enroll Now!</button>
  </form>
</div>

  );
}

export default Home;