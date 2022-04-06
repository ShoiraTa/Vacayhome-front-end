import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Reservantion from './components/Reservations/Reservation';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/:house_is/reservantion" element={<Reservantion />} />
      </Routes>
    </>
  );
}

export default App;
