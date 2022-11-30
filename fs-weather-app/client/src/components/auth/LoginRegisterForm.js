/*
  References:
  https://getbootstrap.com/docs/5.0/forms/validation/
  https://bobbyhadz.com/blog/react-document-queryselector
  https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
  https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
*/
import { useState } from 'react';
import Button from '../general/Button';
import axios from 'axios';
import InputField from './form-parts/InputField';

// States for checking the errors
const NEUTRAL_CSS = 'form-control';
const INVALID_CSS = 'is-invalid';
const VALID_CSS = 'is-valid'


const DisplayNameField = ({ formType, handleDisplayName, displayNameCSS, displayName }) => {

  // Only display displayName field if registering
  if (formType === 'register') {
    return (
      <InputField
        id='displayNameInput'
        labelText='Display Name'
        onChange={handleDisplayName}
        className={displayNameCSS}
        value={displayName} 
        type='text'
        invalidText='Please enter a display name!'
      />
    )
  } else if (formType === 'login') {
    return ('')
  }
}


const AuthForm = ({ BACKEND_URL, formType }) => {

  // States for registration
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  // Change CSS class value if field is empty (does no other error checking)
  const checkForEmptyInput = (fieldInput, setData) => {
    let successValue = false;
    // Check validity of displayName and 
    if (fieldInput === '') {
      setInvalidCSS(setData);
    } else {
      successValue = true;
      setValidCSS(setData);
    }
    return successValue;
  }

  // Handling the form submission
  // Currently only checks to see if the form field is empty. Validation of email format and password complexity isn't done yet!
  const handleSubmit = async (event) => {
    event.preventDefault();
    let error = false;

    if (formType === 'login') {
      
    }
    // Check to make sure there is some entry for each of the following
    // Only check for displayName entry if this is a register form. Not needed for login
    if (formType === 'register') {
      if (!checkForEmptyInput(displayName, setDisplayNameCSS)) error = true;
    }
    if (!checkForEmptyInput(email, setEmailCSS)) error = true;
    if (!checkForEmptyInput(password, setPasswordCSS)) error = true;


    // Send request to backend
    // If we have no errors we can send the login or registration information to the server
    if (!error) {
      let requestInfo = {
        email: email,
        password: password,
      }
      if (formType === 'register') {
        requestInfo.displayName = displayName;
      }

      // Send the request to the backend
      axios.post(`${BACKEND_URL}/data/user/${formType}`, requestInfo)
      .then(() => {
        // Output the results to the console
        if (formType === 'login') {
          console.log(`User ${email} successfully logged in!!`);
        }
        else if (formType === 'register') {
          console.log(`User ${email} successfully registered!!`)
        }
      })
      .catch(function (error) {
        console.error(error.response);
      });  
    }
  };

 
  return (
    <div className='auth-form'>
      
      <form className='needs-validation'>

        {/* Display Name Input */}
        {/* Only the displayName has its own component bc it is the only field that is conditional */}
        <DisplayNameField
          formType={formType}
          handleDisplayName={handleDisplayName}
          displayNameCSS={displayNameCSS}
          displayName={displayName}
        />

        
        {/* Email Input */}
        <InputField
          id='emailInput'
          labelText='Email'
          onChange={handleEmail}
          className={emailCSS}
          value={email} 
          type='email'
          invalidText='Please enter an email!'
          autocomplete='fs-weather login email'
        />
        
        
        {/* Password Input */}
        <InputField
          id='passwordInput'
          labelText='Password'
          onChange={handlePassword}
          className={passwordCSS}
          value={password} 
          type='password'
          invalidText='Please enter a password!'
          autocomplete='fs-weather login password'
        />
        
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

export default AuthForm