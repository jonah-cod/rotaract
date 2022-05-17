import React from 'react';
import './App.css';
import MenuAppBar from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero';
import { Divider } from '@mui/material';
import Caurosel from './components/Caurosel';


const Main = ()=>{
  return(
    <div className="App">
        <MenuAppBar/>
        <Hero/>
        <Divider textAlign='left' sx={{width:'95%', m:4, color:'#15448a'}}>Overview</Divider>
        {/* <Caurosel/> */}
      </div>
  )
}
function App() {
  return (
    
    <Router>
      <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
    </Router>
  );
}

export default App;
