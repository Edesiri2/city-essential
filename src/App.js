import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import './App.css';
import Evoting from './Pages/evoting';
import Navbar from './components/Navbar';
import CityVerse from './Pages/cityVerse';
import Home from './Pages/home';
import CityBuilder from './Pages/cityBuilder';
import Foot from './components/footer';


function App() {

  return (
    <div className="App"> 
      <Router>
       <Navbar/>
        <Routes>
          <Route path= "/" element={ <Navigate to="/home" /> } />
          <Route path= "/home" element= {<Home />} />
          <Route path= "/evoting" element = {<Evoting />} />
          <Route path= "/citybuilder" element = {<CityBuilder/>} />
          <Route path= "/cityverse" element = {<CityVerse />} />
        </Routes>
        <Foot/>
      </Router> 
      
    </div>
  );
}

export default App;
