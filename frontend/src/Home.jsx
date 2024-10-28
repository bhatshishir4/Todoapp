import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Todoapp</h1>
      <div className="button-container">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;