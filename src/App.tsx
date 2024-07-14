import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing_Page from './Pages/Landing_Page';
import Dashboard_page from './Pages/Dashboard_page';
import Candidate_Jobs from './Pages/Candidate_Jobs';
import Create_profile from './Pages/Create_profile';
import { ContextProvide } from './Components/ContextProvide';
import { Sidebar } from './Components/Sidebar';
import Build_Resume from './Pages/Build_Resume';
import './App.css';

function MainContent() {
  const location = useLocation();
  return (
    <div className="w-screen overflow-x-hidden flex ">
      {location.pathname !== '/' && <Sidebar />}
      <div className={`flex-1 ${location.pathname !== '/' ? 'ml-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/d" element={<Dashboard_page />} />
          <Route path="/p" element={<Create_profile />} />
          <Route path="/Jobs" element={<Candidate_Jobs/>} />
          <Route path="/BuildResume" element={<Build_Resume/>} />
          
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ContextProvide>
      <Router>
        <Navbar />
        <MainContent />
      </Router>
    </ContextProvide>
  );
}

export default App;
