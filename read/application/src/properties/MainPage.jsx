import React, { useState } from "react";
import UnderPage from "./UnderPage"; 
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const title = "Welcome to the Home Page!";

  const name = "abhay";
  const user = {
    surname: "suthar",
    surname1: "dalwadi",
  };

  const navigate = useNavigate(); 
  const [message, setMessage] = useState('');
  const handleClick = ()=>{
    setMessage("Button was clicked");
  }
  

  const handleClickOtherPage = () => {
    
    navigate("/otherpage");
  };

  const handleClickUnderPage = (name) => {
    if(name){
      console.log(name);
    navigate("/underpage");
  }
  };

  function formatName(user) {
    return `${user.surname} ${name} ${user.surname1}`; 
  }

  function gettingUser(user) {
    if (user) {
      console.log("This is only testing feature");
    }
    return "Hello world";
  }

  return (
    <>

<button onClick={handleClick}>
    clcik me 
  </button>
  
     <p>{message}</p>
      <h1>{title}</h1>
      <button onClick={handleClickOtherPage}>Go to Other Page</button>
      <button onClick={handleClickUnderPage}>Go to under Page</button>
      <h1>This is the home page {formatName(user)}</h1>
      <p>{gettingUser(user)}</p>
      <UnderPage />
    </>
  );
};

export default MainPage;
