import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Detail from './components/Details';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Reservation from './components/Reservations/Reservation';
import UserReservations from './components/Reservations/UserReservations';
import AddHouse from './components/AddHouse/AddHouse';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":userid/:houseid/reservation" element={<Reservation />} />
        <Route path=":userid/reservations" element={<UserReservations />} />
        <Route path="new_house" element={<AddHouse />} />
      </Routes>
    </main>
  );
}

export default App;
