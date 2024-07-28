// import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing_Page from './Pages/Landing_Page';
import Dashboard_page from './Pages/Dashboard_page';
import Candidate_Jobs from './Pages/Candidate_Jobs';
import Create_profile from './Pages/Create_profile';
import { ContextProvide } from './Components/ContextProvide';
import { Sidebar } from './Components/Sidebar';
import Build_Resume from './Pages/Build_Resume';
import Job_Description from './Pages/Job_Description';
import MYprofile from './Pages/MYprofile';
import EmployerCreate_profile from './Pages/EmployerCreate_Profile';
import Employer_PostJob from './Pages/Employer_PostJob';
import InstituteProfile from './Pages/InstituteProfile';
import './App.css';

function MainContent() {
  const location = useLocation();
  return (
    <div className="w-screen overflow-x-hidden flex  ">
      {location.pathname !== '/' && location.pathname!='/MYprofile' && <Sidebar />}
      <div className={`flex-1 ${location.pathname !== '/' && location.pathname!='/MYprofile' ? 'ml-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/d" element={<Dashboard_page />} />
          <Route path="/p" element={<Create_profile />} />
          <Route path="/Jobs" element={<Candidate_Jobs/>} />
          <Route path="/BuildResume" element={<Build_Resume/>} />
          <Route path="/MyProfile" element={<MYprofile/>}/>
          <Route path="/JobDescription" element={<Job_Description/>}/>   
          <Route path="/EmployerCreateProfile" element={<EmployerCreate_profile/>}/> 
          <Route path="/EmployerPostJob" element={<Employer_PostJob/>}/>
          <Route path="/InstituteProfile" element={<InstituteProfile/>}/>
          
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
