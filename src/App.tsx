import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import AgencyPage from './pages/AgencyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarsPage from './pages/CarsPage';
//import UserInfoForm from './pages/UserInfoForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />        
        <Route path="/location" element={<LocationPage />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/carsmap" element={<CarsPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
