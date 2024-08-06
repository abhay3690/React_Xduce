// src/components/BookCar.js
import React, { useState } from 'react';
import { bookACar } from '../services/api';

const BookCar = () => {
  const [booking, setBooking] = useState({
    carId: '',
    formDate: '',
    toDate: '',
    days: '',
    price: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookACar(booking);
      setMessage('Car booked successfully!');
    } catch (error) {
      setMessage('Failed to book car.');
    }
  };

  return (
    <div>
      <h2>Book a Car</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="carId" placeholder="Car ID" onChange={handleChange} required />
        <input type="date" name="formDate" onChange={handleChange} required />
        <input type="date" name="toDate" onChange={handleChange} required />
        <input type="number" name="days" placeholder="Number of days" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <button type="submit">Book Car</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookCar;



// // src/components/AddCar.js
// import React, { useState } from 'react';
// import { postCar } from '../services/api';

// const AddCar = ({setCarsDetails ,message , setMessage}) => {
//   const [car, setCar] = useState({
//     brand: '',
//     color: '',
//     name: '',
//     type: '',
//     transmission: '',
//     description: '',
//     price: '',
//     year: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setCar({ ...car, [name]: files[0] });
//     } else {
//       setCar({ ...car, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(car , "car details");
//     setCarsDetails(prev =>{
//         setMessage("added");
//         setTimeout(()=>{
//             setMessage('');
//         },1000);
//         return [...prev , car];
//     });
//     // const formData = new FormData();
//     // Object.keys(car).forEach(key => {
//     //   formData.append(key, car[key]);
//     // });
//     // try {
//     //   await postCar(formData);
//     //   setMessage('Car added successfully!');
//     // } catch (error) {
//     //   setMessage('Failed to add car. Please try again.');
//     // }
//   };

//   return (
//     <div>
//       <h2>Add Car</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Form fields for car properties */}
//         <input type="text" name="brand" placeholder="Brand" onChange={handleChange} required />
//         <input type="text" name="color" placeholder="Color" onChange={handleChange} required />
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//         <input type="text" name="type" placeholder="Type" onChange={handleChange} required />
//         <input type="text" name="transmission" placeholder="Transmission" onChange={handleChange} required />
//         <textarea name="description" placeholder="Description" onChange={handleChange} required />
//         <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
//         <input type="date" name="year" placeholder="Year" onChange={handleChange} required />
//         <input type="file" name="image" onChange={handleChange} />
//         <button type="submit">Add Car</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AddCar;