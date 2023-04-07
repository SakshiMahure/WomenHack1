import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Login from './components/Login';
import Signup from './components/Signup';
import Hero from './components/Hero';
import Admin from './components/Admin';
import BlogDetails from './components/BlogDetails';
import Announcements from './components/Announcements';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/announcements' element={<Announcements/>}/>
        </Routes>
      </Router>
      
   
   

  </div>
  );
}

export default App;
