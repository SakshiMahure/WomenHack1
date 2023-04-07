import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { user } = useAuthContext();
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
   
   

  </div>
  );
}

export default App;
