/*
  References:
  https://getbootstrap.com/docs/5.0/forms/validation/
  https://bobbyhadz.com/blog/react-document-queryselector
  https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
  https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
*/

import { useState } from 'react';
import Button from '../components/general/Button';
import axios from 'axios';

// const BACKEND_URL = 'http://localhost:5001';
// const axios = require('axios');

const RegistrationForm = () => {
  // States for registration
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);
  const NEUTRAL_CSS = 'form-control';
  const INVALID_CSS = 'is-invalid';
  const VALID_CSS = 'is-valid'

  // Check for each field
  const [displayNameCSS, setDisplayNameCSS] = useState(NEUTRAL_CSS);
  const [emailCSS, setEmailCSS] = useState(`${NEUTRAL_CSS}`);
  const [passwordCSS, setPasswordCSS] = useState(NEUTRAL_CSS);
  
  // Update the CSS class values for form-control fields
  const setNeutralCSS = (setData) => {
    setData(NEUTRAL_CSS)
  };
  const setInvalidCSS = (setData) => {
    setData(`${NEUTRAL_CSS} ${INVALID_CSS}`)
  }
  const setValidCSS = (setData) => {
    setData(`${NEUTRAL_CSS} ${VALID_CSS}`)
  }
 
  // Each of these three functions will go off every time a character is entered into the fields they govern

  // displayName handling
  const handleDisplayName = (e) => {
    setNeutralCSS(setDisplayNameCSS);   // Clears valid and invalid styling when someone starts typing
    setDisplayName(e.target.value);     // Set the display name to the current value of the field
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setNeutralCSS(setEmailCSS);         // Clears valid and invalid styling when someone starts typing
    setEmail(e.target.value);           // Set the email to the current value of the field
  };

  // Handling the password change
  const handlePassword = (e) => {
    setNeutralCSS(setPasswordCSS);      // Clears valid and invalid styling when someone starts typing
    setPassword(e.target.value);        // Set the password to the current value of the field
  };

  // Handling the form submission
  // Currently only checks to see if the form field is empty. Validation of email format and password complexity isn't done yet!
  const handleSubmit = async (event) => {
    event.preventDefault();
    let error = false;

    // Check to make sure there are entries for each of the following

    // Display Name
    if (displayName === '') {
      error = true;
      setInvalidCSS(setDisplayNameCSS);
    } else {
      setValidCSS(setDisplayNameCSS);
    }

    // Email
    // NOTE: This doesn't currently check for email format validity, but it will
    if (email === '') {
      error = true;
      setInvalidCSS(setEmailCSS);
    } else {
      setValidCSS(setEmailCSS);
    }

    // Password
    // NOTE: This doesn't currently check for password copmlexity, but it will
    if (password === '') {
      error = true;
      setInvalidCSS(setPasswordCSS);
    } else {
      setValidCSS(setPasswordCSS);
    }

    // If we have no errors we can send the registration information to the server
    // When eventually hooked up, this will need to use https so the data is encrypted in transit.
    // The database will encrypt the stored format so we just need to worry about transit for front end.
    if (!error) {
      const registrationInfo = {
        displayName: displayName,
        email: email,
        password: password,
      }
      // console.log(registrationInfo);

      // Send the request to the backend
      axios.post('http://localhost:5001/data/user/register', registrationInfo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // console.log(`response = ${response}`)
    }
  };

 
  return (
    <div className='registrationForm'>
      {/* Form Title */}
      <div>
        <h4>User Registration</h4>
      </div>

      {/* Display Name Input */}
      <form
        className='needs-validation'
      >
        <div className='mb-3'>
          <label 
            htmlFor='displayNameInput' 
            className='form-label'
          >Display Name</label>
          <input 
            onChange={handleDisplayName} 
            className={displayNameCSS}
            value={displayName} 
            type='text' 
            id='displayNameInput'
            required
          />
          <div className='invalid-feedback'>
            Please enter a display name!
          </div>
        </div>
        
        {/* Email Input */}
        <div className='mb-3'>
          <label 
            htmlFor='emailInput'
            className='form-label'
          >Email</label>
          <input 
            onChange={handleEmail} 
            className={emailCSS}
            value={email} 
            type='email'
            id='emailInput'
            autoComplete='fs-weather login email'
            required
          />
          <div className='invalid-feedback'>
            Please enter an email!
          </div>
        </div>
        
        {/* Password Input */}
        <div className='mb-3'>
          <label 
            htmlFor='passwordInput'
            className='form-label'
          >Password</label>
          <input 
            onChange={handlePassword} 
            className={passwordCSS}
            value={password} 
            type='password' 
            id='passwordInput'
            autoComplete='fs-weather login password'
            required
          />
          <div className='invalid-feedback'>
            Please enter a password!
          </div>
        </div>
        
        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          btnClasses='btn btn-primary'
          type='submit'
          text='Submit Registration'
        />

      </form>
    </div>
  );

}

const LoginRegistrationPage = () => {
  return (
    <div className='login-registration-page'>
      {/* Separated into its own component because may swap with login later */}
      <RegistrationForm />
    </div>
  )
}

export default LoginRegistrationPage