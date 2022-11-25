/*
  References:
  https://bobbyhadz.com/blog/react-onclick-redirect
*/
// import Button from "./Button"

import { Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../../routes/Login';

const LoginLogoutBtn = ({ loggedIn }) => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };

  if (!loggedIn) {
    return (
      <div className='login-logout-btn'>
        <button type="button" onClick={navigateToLogin} className="btn btn-primary">Login</button>
        <Routes>
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
      
    )
  }
}


// General app headers
const Header = ({ headerTitle, headerClasses, navigateToLogin }) => {


  return (
    <header className={headerClasses}>
      <div className='container'>
        { headerTitle }
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