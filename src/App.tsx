import React from 'react';
// import { useState,createContext } from 'react';
import Navbar from './Components/Navbar';
import Landing_Page from './Pages/Landing_Page';
import { ContextProvide } from './Components/ContextProvide';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  


  return (
    <ContextProvide>
      <Router>
        <div className="w-screen overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            
          </Routes>
        </div>
      </Router>

    </ContextProvide>

  );
}

export default App;
