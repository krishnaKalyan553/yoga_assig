
# Registration Website for Yoga classes

Welcome to the Yoga Website project (Mindful Bliss)! This project is aimed at creating a form for a yoga studio that includes a payment gateway integration, and a thank-you page.


## Demo

https://mindfulbliss.netlify.app/

Try out the appliaction here 😎

#### Deployed using netlify 

Note: Please be patient as our server responds. Your journey to a healthier, more balanced life awaits! 🌿


## Features

- **Form Input:** Allow users to submit their information to register for yoga classes.
- **Payment Gateway Integration:** Securely process payments for yoga class reservations. It is temporarily serving for now.
- **Thank-You Page:** Display a thank-you message to users after successful form submission and payment.


## Tech Stack

**Client:** React, Html, Css

**Server:** Node, Express


## API Reference
Try out the working backend api by using postman.

https://mindfullbliss.onrender.com/

#### deployed using Render

#### /api/submitForm

Takes form data as a dictinary and validates the data.

#### /api/Thankyou

Validates the payment.


### Assumptions

## search_db : 
This function is assumed to check the provided email against the actual email. 

## maximum_no_people :
This function is assumed to check if the maximum number of people in a batch got reached or not. 

## CompletePayment :
This function assumed to complete the payment made through the form.
