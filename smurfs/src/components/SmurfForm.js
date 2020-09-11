import React, { useState } from "react";
import { postNewSmurf } from "../actions/actions";
import { connect } from "react-redux";
import SmurfList from "./SmurfList";
import styled from "styled-components";
import form from '../images/smurf2.jpg'

const Background = styled.div`
    background-image: url(${form});
    width: 100%;
    height: 100%;
    margin-top: -27px;
    background-size: cover;
    h1 {
        font-size: 2.5rem;
        color: blue;
        text-align: center;
        text-shadow: 3px 1px 1px black;
        width: 70%;
        padding: 100px 0 25px 200px;
    }
    form {
        margin-left: 40px;
    }
    input {
        border: 2px solid blue;
        border-radius: 5px;
        padding: 5px;
        color: blue;
        font-weight: bold;
        font-size: 1.1rem;
        margin-left: 3px;
        text-align: center;
        ::placeholder {
            color: blue;
        }
    }
    button {
        display: flex;
        margin-left: 630px;
        margin-top: 10px;
        margin-bottom: 40px;
        border: 2px solid blue;
        border-radius: 5px;
        padding: 7px;
        font-size: 1.1rem;
        &:hover {
            background-color: #88CCFF;
            color: blue;
        }
`;

// Smurf Form 

const SmurfForm = ({ postNewSmurf }) => {
  const newSmurt = {
    name: "",
    age: "",
    height: "",
    id: "",
  };

  const [smurf, setSmurf] = useState(newSmurt);

 // Handels Imput of new Smurf Submission 
  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: "",
      id: "",
      url: "",
    });
  };

  return (
    <Background>
      <h1>Please Add Smurf a Smurf Below!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              placeholder="Enter Name"
              value={smurf.name}
            />

            <input
              type="text"
              onChange={handleChange}
              name="age"
              placeholder="Enter Age"
              value={smurf.age}
            />

            <input
              type="text"
              onChange={handleChange}
              name="height"
              placeholder="Enter Height"
              value={smurf.height}
            />

            <button type="submit">Add Smurf</button>
          </div>
        </form>
        <SmurfList />
      </div>
    </Background>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

const mapDispatchToProps = { postNewSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);