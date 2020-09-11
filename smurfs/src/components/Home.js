import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
        <h1>Lets Increase Our Village With Smurf New Members</h1>
        <button>
          <Link to="/smurfs">Add Smurf Members</Link>
        </button></div>
    );
  };
  
  export default Home;