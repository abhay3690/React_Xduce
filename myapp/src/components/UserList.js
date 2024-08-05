// src/components/UserList.js
import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  // State for handling user form
  const [formState, setFormState] = useState({ id: '', firstName: '', lastName: '', email: '', gender: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/models');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const searchHandler = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const results = users.filter(user =>
      user.firstName.toLowerCase().includes(lowercasedQuery) ||
      user.lastName.toLowerCase().includes(lowercasedQuery) ||
      user.email.toLowerCase().includes(lowercasedQuery) ||
      user.gender.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(results);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (editing) {
      await updateUser(formState);
    } else {
      await addUser(formState);
    }
    setFormState({ id: '', firstName: '', lastName: '', email: '', gender: '' });
    setEditing(false);
    fetchUsers();
  };

  const addUser = async (user) => {
    try {
      const response = await fetch('http://localhost:8080/api/models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
    } catch (error) {
      setError(error);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await fetch(`http://localhost:8080/api/models/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
    } catch (error) {
      setError(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/models/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      fetchUsers();
    } catch (error) {
      setError(error);
    }
  };

  const startEdit = (user) => {
    setFormState(user);
    setEditing(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <div className="search-bar-container">
        <input
          placeholder="Search"
          value={searchQuery}
          onChange={searchHandler}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formState.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formState.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formState.gender}
          onChange={handleChange}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} User</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => startEdit(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
















// // src/components/UserList.js
// import React, { useEffect, useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/models') // URL of the Spring Boot backend
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setFilteredUsers(data); // Initialize filtered users with all users
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const searchHandler = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);

//     // Filter users based on the search query
//     const lowercasedQuery = query.toLowerCase();
//     const results = users.filter((user) =>
//       user.firstName.toLowerCase().includes(lowercasedQuery) ||
//       user.lastName.toLowerCase().includes(lowercasedQuery) ||
//       user.email.toLowerCase().includes(lowercasedQuery) ||
//       user.gender.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredUsers(results);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data: {error.message}</p>;

//   return (
//     <div>
//       <h1>Users</h1>
//       <div className="search-bar-container">
//         <input
//           placeholder="Search"
//           value={searchQuery}
//           onChange={searchHandler}
//         />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.email}</td>
//               <td>{user.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;
