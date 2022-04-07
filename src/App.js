import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Homepage from './components/Homepage/Homepage';
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
        <Route path="/*" element={<Home />}>
          <Route path="" element={<Homepage />} />
          <Route path="new_listing" element={<AddHouse />} />
        </Route>
        <Route path="/details" element={<Detail />} />
        <Route path="/:userid/:houseid/reservation" element={<Reservation />} />
        <Route path="/:userid/reservations" element={<UserReservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
