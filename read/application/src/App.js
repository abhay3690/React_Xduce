import React from "react";
import "./App.css";
import Otherpage from "./properties/Otherpage"; 
import MainPage from "./properties/MainPage"; // Corrected the name from MainPgae to MainPage
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Ensure proper import of BrowserRouter
import UnderPage from "./properties/UnderPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/otherpage" element={<Otherpage />} />
        <Route path="/underpage" element={<UnderPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
