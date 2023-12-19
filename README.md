
# Registration Website for Yoga classes

Welcome to the Yoga Website project (Mindful Bliss)! This project aims to create a form for a yoga studio that includes a payment gateway integration, and a thank-you page.


## Demo

https://mindfulbliss.netlify.app/

Try out the application here 😎

#### Deployed using Netlify 

Just so you know, please be patient as our server responds. Your journey to a healthier, more balanced life awaits! 🌿


## Features

- **Form Input:** Allow users to submit their information to register for yoga classes.
- **Payment Gateway Integration:** Securely process payments for yoga class reservations. It is temporarily serving for now.
- **Thank-You Page:** Display a thank-you message to users after successful form submission and payment.


## Tech Stack

**Client:** React, Html, CSS

**Server:** Node, Express


## API Reference
Try out the working backend API by using Postman.

https://mindfullbliss.onrender.com/

#### deployed using Render

#### /api/submitForm

Takes form data as a dictionary and validates the data.

#### /api/Thankyou

Validates the payment.

responds with a status code of 200 in case of correct execution result

responds with a status code of 400 in case of an error in the validation


## Assumptions

### search_db : 
This function is assumed to check the provided email against the actual email. 

### maximum_no_people :
This function is assumed to check if the maximum number of people in a batch was reached or not. 

### CompletePayment :
This function is assumed to complete the payment made through the form.
