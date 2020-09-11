import React from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import { Route } from "react-router-dom";
import Home from "./Home";
import NavBar from './NavBar'
// Main App wrapped in navbar and provided routs to Home and Smurf Form 
const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Route path="/" exact component={Home} />

      <Route path="/smurfs">
        <SmurfForm />
      </Route>
    </div>
  );
};

export default App;