/*
  References:
  https://getbootstrap.com/docs/5.0/forms/validation/
  https://bobbyhadz.com/blog/react-document-queryselector
  https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
  https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
*/


import AuthForm from '../components/auth/AuthForm'
const BACKEND_URL = 'http://localhost:5001';



const LoginRegistrationPage = () => {
  // We start on login by default
  let formType = 'login';

  const getTitle = (formType) => {
    console.log(`form type = ${formType}`)
    if (formType === 'register') {
      return ('User Registration')
    }
    else if (formType === 'login') {
      return ('User Login');
    }
  }

  return (
    <div className='login-registration-page'>
      {/* Separated into its own component because may swap with login later */}
      {/* Form Title */}
      <div>
        <h4>{getTitle(formType)}</h4>
      </div>
      <AuthForm 
        BACKEND_URL={BACKEND_URL}
        formType='register'
      />
    </div>
  )
}

export default LoginRegistrationPage