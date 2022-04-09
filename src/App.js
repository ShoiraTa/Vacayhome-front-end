import React, { useState } from 'react';
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
import RemoveHouse from './components/DeleteListing';
import Auth from './components/LoginRegister/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
  const paths = Auth(isLoggedIn);

  console.log(paths);

  return (
    <main className="App">
      <Routes>
        <Route path="/*" element={<Home isLoggedIn={isLoggedIn} />}>
          <Route exact path={paths.home} element={<Homepage isLoggedIn={isLoggedIn} />} />
          <Route path={paths.details} element={<Detail />} />
          <Route path={paths.addHouse} element={<AddHouse />} />
          <Route
            path={paths.userReservations}
            element={<UserReservations isLoggedIn={isLoggedIn} />}
          />
        </Route>
        <Route
          path={paths.reservation}
          element={isLoggedIn ? <Reservation /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path={paths.deleteHouse}
          element={isLoggedIn ? <RemoveHouse /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path={paths.login} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
