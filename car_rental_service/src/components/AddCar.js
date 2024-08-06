// src/components/AddCar.js
import React, { useState } from "react";
import { postCar } from "../services/api";

const AddCar = ({ setCarsDetails, message, setMessage }) => {
  const [car, setCar] = useState({
    brand: "",
    color: "",
    name: "",
    type: "",
    transmission: "",
    description: "",
    price: "",
    year: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
            setCar({ ...car, [name]: files[0] });
    } else {
        
            setCar({ ...car, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(car , "car details");
    postCar(car).then(()=>{
        setCarsDetails(prev =>{
            setMessage("addedojefwe9u09ru439iujewfijsdoifjasdifojawsd");
            setTimeout(()=>{
                setMessage('');
            },1000);
            return [...prev , car];
        });
    }).catch(err =>{
        console.log(err.message);
    });
    // const formData = new FormData();
    // Object.keys(car).forEach((key) => {
    //   formData.append(key, car[key]);
    // });

    // try {
    //   await postCar(formData);
    //   setMessage("Car added successfully!");
    //   setTimeout(() => {
    //     setMessage("");
    //   }, 2000);

    //   // Optionally refetch the car list or update local state
    //   setCarsDetails((prev) => [...prev, car]);
    // } catch (error) {
    //   setMessage("Failed to add car. Please try again.");
    // }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={car.brand}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={car.color}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={car.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={car.type}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="transmission"
          placeholder="Transmission"
          value={car.transmission}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleChange}
          required
        />
        <input type="file" name="image" onChange={handleChange} />
        <button type="submit">Add Car</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCar;
