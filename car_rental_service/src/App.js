// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import AddCar from './components/AddCar';
import ListCars from './components/ListCars';
import BookCar from './components/BookCar';
import ListCarsForCustomer from './components/ListCarsForCustomer';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [carsDetails , setCarsDetails] = useState([]);
  const [message, setMessage] = useState('');

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        {!token ? (
          <>
            <Link to="/signup">Signup</Link> |
            <Link to="/login">Login</Link> |
          </>
        ) : (
          <>
            <Link to="/add-car">Add Car</Link> |
            <Link to="/list-cars">List Cars</Link> |
            <Link to="/book-car">Book Car</Link> |
            <Link to="/list-cars-customer">Available Cars</Link> |
            <button onClick={() => {
              localStorage.removeItem('token');
              setToken(null);
            }}>Logout</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Car Rental</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/add-car" element={token ? <AddCar setCarsDetails={setCarsDetails} message={message} setMessage={setMessage} /> : <h2>Please log in</h2>} />
        <Route path="/list-cars" element={token ? <ListCars carsDetails={carsDetails} /> : <h2>Please log in</h2>} />
        <Route path="/book-car" element={token ? <BookCar /> : <h2>Please log in</h2>} />
        <Route path="/list-cars-customer" element={<ListCarsForCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
