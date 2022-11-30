import LoginRegisterForm from '../components/auth/LoginRegisterForm';
const BACKEND_URL = 'http://localhost:5001';


const FormDisplay = ({ formType }) => {
  return (
    <div>
      <FormTitle formType={formType} />
      <LoginRegisterForm 
        BACKEND_URL={BACKEND_URL}
        formType={formType}
      />
    </div>
  )
}

const FormTitle = ({ formType }) => {

  // Figure out the title text and Button 
  let titleText = '';
  if (formType === 'register') {
    titleText = 'User Registration';
  }
  else if (formType === 'login') {
    titleText = 'User Login';
  }

  return (<h4>{titleText}</h4>)
}

const LoginRegistrationPage = ({ formType }) => {

  
  return (
    <div className='login-registration-page'>
      <FormDisplay formType={formType} />
    </div>
  )
}

export default LoginRegistrationPage