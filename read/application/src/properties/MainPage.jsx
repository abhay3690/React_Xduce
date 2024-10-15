import React from "react";
import UnderPage from "./UnderPage"; 
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const title = "Welcome to the Home Page!";

  const name = "abhay";
  const user = {
    surname: "suthar",
    surname1: "dalwadi",
  };

  const navigate = useNavigate(2); 

  const handleClickOtherPage = () => {
    navigate("/otherpage");
  };

  const handleClickUnderPage = () => {
    navigate("/underpage");
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
