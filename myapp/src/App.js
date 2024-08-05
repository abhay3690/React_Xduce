import { useState } from "react";
import UserList from './components/UserList'; 

import "./App.css";

// import axios from 'axios'


function App() {
  const [searchQuery , setSearchQuery] = useState();
  const [searchResults , setSearchResults] = useState([]);

  const searchHandler = (event) => {
     console.log(event.target.value , "this is the value for the search");
  }
  return (
   <div className="app">
    <UserList></UserList>
  </div>
    
  );
}

export default App;
