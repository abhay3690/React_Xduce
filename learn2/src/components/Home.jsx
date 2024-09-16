// src/App.js
import React from 'react';
import './Navbar.css';
import './Sidebar.css';
import './HomePage.css';

const Home = () => {
  return (
    <div className="app">
      <div className="navbar">
        <h1 className="navbar-title">My App</h1>
        <nav className="navbar-nav">
          <ul className="navbar-list">
            <li className="navbar-item"><a className="navbar-link" href="/"><Home/></a></li>
            <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
            <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item"><a className="sidebar-link" href="/">Home</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="/about">About</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to the Home Page</h2>
        <p>This is a simple homepage example.</p>
      </div>
    </div>
  );
};

export default Home;
