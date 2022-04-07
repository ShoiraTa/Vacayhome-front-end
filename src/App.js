import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Reservation from './components/Reservations/Reservation';
import AddHouse from './components/AddHouse/AddHouse';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/:house_is/Reservation" element={<Reservation />} />
        <Route path="new_house" element={<AddHouse />} />
      </Routes>
    </>
  );
}

export default App;
