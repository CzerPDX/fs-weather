/*

  References:
  https://v5.reactrouter.com/web/guides/quick-start
  https://reactrouter.com/en/main/start/overview
*/


import './index.css';
import MainPage from './routes/MainPage';
import Login from './routes/Login';
import Header from './components/general/Header';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  
  


  return (
    <div>
      
      <Header 
        headerTitle='FS Weather'
        headerClasses='p-3 bg-dark text-white header'
      />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
