
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './home'
import Payment from './payment';
import ErrorPage from './Error';
import Thankyou from './Thankyou';


const App = () => {
  return (
    <div>
      <Router>    
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment  />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/thanks" element={<Thankyou />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

