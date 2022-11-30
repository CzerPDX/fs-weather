import { useState } from 'react';
import Button from '../general/Button';
import axios from 'axios';


const DisplayNameField = ({handleDisplayName, displayNameCSS, displayName, formType}) => {

  console.log(`HELLO its ${formType}`)
  if (formType === 'register') {
   
    return (
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
    )
  }

  else if (formType === 'login') {
    return ('')
  }
  
}


const AuthForm = ({ BACKEND_URL, formType }) => {

  // States for registration
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
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

  const handleEmptyCSS = (fieldInput, setData) => {
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
      if (!handleEmptyCSS(displayName, setDisplayNameCSS)) error = true;
    }
    if (!handleEmptyCSS(email, setEmailCSS)) error = true;
    if (!handleEmptyCSS(password, setPasswordCSS)) error = true;


    // If we have no errors we can send the registration information to the server
    if (!error) {
      let requestInfo = {
        email: email,
        password: password,
      }
      if (formType === 'register') {
        requestInfo.displayName = displayName;
      }

      // Send the login request to the backend
      axios.post(`${BACKEND_URL}/data/user/${formType}`, requestInfo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });  
    }
  };

 
  return (
    <div className='auth-form'>
      
      <form className='needs-validation'>

        {/* Display Name Input */}
        {/* Only the displayName has its own component bc it is the only field that is conditional */}
        <DisplayNameField
          handleDisplayName={handleDisplayName} 
          displayNameCSS={displayNameCSS} 
          displayName={displayName}
          formType={formType}
        />
        
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

export default AuthForm