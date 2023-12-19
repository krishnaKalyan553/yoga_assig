const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/makepayment',(req,res)=>{
  console.log("payment triggred")
  const payment_details = req.body;
  function CompletePayment(data){
    // completes payment
    return true
  }
  if(CompletePayment(payment_details)){
    res.status(200).json({ success: true});
  }
  else{
    res.status(400).json({ success: false});
  }

});
app.get('/',(req,res)=>{res.json({"its working":"yeah"}) })

app.post('/api/submitForm', (req, res) => {
  const formData = req.body;
  console.log(formData.name+" data reached");
  function search_db(email){
    // searching for the presence of email in the database.
    return false
  }
  function maximum_no_people(batch){
    // searches for number of people in a batch
    return false
  }
  function validate(data){
    let isValid = true
    if(data.name.length==0){
      isValid = false
      console.log("name")
    }
    else if (data.age<18 || data.age>65 ){
      isValid = false
      console.log("age")
    }
    else if(search_db(data.email)==true){
      isValid = false
      console.log("email")
    }
    else if(data.batch != "6-7AM" && data.batch != "7-8AM" && data.batch != "8-9AM" && data.batch != "5-6PM"){
      isValid = false
      console.log("batch")
    }
    else if(maximum_no_people(data.batch)==true){
      res.status(400).json({ success: false,message:'Unexpected Error'});
    }
    return isValid
  }
  if(validate(formData)==true){
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  }
  else{
    res.status(400).json({ success: false,message:'Unexpected Error'});
  }
  
});


app.listen(port);
