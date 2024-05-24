// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();
//   const {id} = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });
//   const { name, username, email } = user;
//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };
//   useEffect(()=>{
//     loadUsers();
//   },[]);
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8080/user/${id}`, user);
//     navigate("/");
//   };
//   const loadUsers= async()=>{
//     console.log("function callled")
//     const result =await axios.get(`http://localhost:8080/user/${id}`)
//     setUser(result.data)
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit USer</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="Name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Your Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Your Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Email" className="form-label">
//                 E-mail
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter Your e-mail address"
//                 name="E-mail"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";

// export default function EditUser() {
//   let navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { name, username, email } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8080/user/${id}`, user);
//       navigate("/");
//     } catch (error) {
//       console.error("Error while updating user:", error);
//     }
//   };

//   const loadUser = async () => {
//     try {
//       const result = await axios.get(`http://localhost:8080/user/${id}`);
//       setUser(result.data);
//     } catch (error) {
//       console.error("Error while fetching user:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit User</h2>
//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Your Name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Your Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter Your Email Address"
//                 name="email"
//                 value={email}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
      await axios.put(`http://localhost:8080/user/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error while updating user:", error);
    }
  };

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
      const result = await axios.get(`http://localhost:8080/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(result.data);
    } catch (error) {
      console.error("Error while fetching user:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Email Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
