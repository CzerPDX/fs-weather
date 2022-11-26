/*
  References:
  https://bobbyhadz.com/blog/react-onclick-redirect
*/
// import Button from "./Button"

import { Routes, Route, useNavigate } from 'react-router-dom';

const LoginLogoutBtn = ({ loggedIn }) => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToMainPage = () => {
    navigate('/');
  };


  let onClick;
  let className;
  let buttonText;
  let routePath;

  if (!loggedIn) {
    onClick = navigateToLogin;
    className = 'login-btn';
    buttonText = 'Login';
    routePath = '/login';
  }
  else {
    onClick = navigateToMainPage;
    className = 'logout-btn';
    buttonText = 'Logout';
    routePath = '/';
  }

  return (
    <div className={className}>
      <button type="button" onClick={onClick} className="btn btn-primary">{buttonText}</button>
      <Routes>
        <Route exact path={routePath} />
      </Routes>
    </div>
  )
}


// General app headers
const Header = ({ headerTitle, headerClasses, navigateToLogin }) => {
  

  return (
    <header className={headerClasses}>
      <div className='container'>
        <h4>{ headerTitle }</h4>
        <LoginLogoutBtn 
          loggedIn={false}
          navigateToLogin={navigateToLogin}
        />
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