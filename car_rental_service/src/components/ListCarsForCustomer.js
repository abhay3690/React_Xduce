// src/components/ListCarsForCustomer.js
import React, { useEffect, useState } from 'react';
import { getCarsByCustomer } from '../services/api';

const ListCarsForCustomer = () => {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carList = await getCarsByCustomer();
        setCars(carList);
      } catch (error) {
        setMessage('Failed to fetch cars.');
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      {message && <p>{message}</p>}
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - {car.brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCarsForCustomer;
