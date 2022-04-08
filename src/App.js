import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Detail from './components/Details';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Reservantion from './components/Reservations/Reservation';
import UserReservations from './components/Reservations/UserReservations';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path=":userid/" element={<Home />} />
        <Route exact path=":userid/:houseid/details" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":userid/:houseid/reservation" element={<Reservantion />} />
        <Route path=":userid/reservations" element={<UserReservations />} />
      </Routes>
    </main>
  );
}

export default App;
