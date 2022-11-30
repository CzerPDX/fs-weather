/*
  References:
  https://bobbyhadz.com/blog/react-onclick-redirect
*/
import Button from "./Button";
import { Link, useNavigate } from 'react-router-dom';

const LoginLogoutBtn = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToRegister = () => {
    navigate('/register');
  };


  let onClick;
  let className;
  let buttonText;
  let routePath;

  if (loginOrRegister === 'login') {
    onClick = navigateToLogin;
    className = 'login-btn';
    buttonText = 'Login';
    routePath = '/login';
  }
  else if (loginOrRegister === 'register') {
    onClick = navigateToRegister;
    className = 'register-btn';
    buttonText = 'Register';
    routePath = '/register';
  }

  return (
    <div className={className}>
      <Link to={routePath}>
        <Button 
          btnClasses='btn btn-primary'
          onClick={onClick}
          text={buttonText}
        />
      </Link>
    </div>
  )
}


// General app headers
const Header = ({ headerTitle, headerClasses, navigateToLogin }) => {
  return (
    <header className={headerClasses}>
      <div className='container'>
        <h4>{ headerTitle }</h4>
        <LoginLogoutBtn loginOrRegister='register' />
        <LoginLogoutBtn loginOrRegister='login' />
      </div>
    </header>
  )
}

// We can set default props below the component
Header.defaultProps = {
  headerTitle: 'FS Weather',
  headerClasses: 'header',
}

export default Header