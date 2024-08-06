// src/components/ListCars.js
import React, { useEffect, useState } from 'react';
import { getAllCars, deleteCar } from '../services/api'; // Ensure deleteCar is imported

const ListCars = ({ carsDetails }) => {
  const [cars, setCars] = useState(carsDetails || []);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carList = await getAllCars();
        setCars(carList);
      } catch (error) {
        setMessage('Failed to fetch cars.');
      }
    };

    if (!carsDetails) {
      fetchCars();
    }
  }, [carsDetails]);

  const handleDelete = async (carId) => {
    try {
      await deleteCar(carId);
      setCars(cars.filter(car => car.id !== carId));
      setMessage('Car deleted successfully!');
    } catch (error) {
      setMessage('Failed to delete car.');
    }
  };

  return (
    <div>
      <h2>List of Cars</h2>
      {message && <p>{message}</p>}
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <div><strong>Name:</strong> {car.name}</div>
            <div><strong>Brand:</strong> {car.brand}</div>
            <div><strong>Color:</strong> {car.color}</div>
            <div><strong>Type:</strong> {car.type}</div>
            <div><strong>Transmission:</strong> {car.transmission}</div>
            <div><strong>Description:</strong> {car.Description}</div>
            <div><strong>Price:</strong> ${car.price}</div>
            <div><strong>Year:</strong> {car.year}</div>
            <div>
              <img src={car.image} alt={car.name} style={{ width: '100px', height: 'auto' }} />
            </div>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCars;
