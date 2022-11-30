import LoginRegisterForm from '../components/auth/LoginRegisterForm';
const BACKEND_URL = 'http://localhost:5001';


// Figure out the title text based on formType
const FormTitle = ({ formType }) => {
  let titleText = '';
  if (formType === 'register') {
    titleText = 'User Registration';
  }
  else if (formType === 'login') {
    titleText = 'User Login';
  }

  // Return the form title
  return (<h4>{titleText}</h4>)
}

const LoginRegistrationPage = ({ formType }) => {
  return (
    <div className='login-registration-page'>
      <FormTitle formType={formType} />
      <LoginRegisterForm 
        BACKEND_URL={BACKEND_URL}
        formType={formType}
      />
    </div>
  )
}

export default LoginRegistrationPage