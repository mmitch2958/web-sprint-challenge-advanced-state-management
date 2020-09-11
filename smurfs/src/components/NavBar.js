import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


//NavBar and Navagation Links to Home
const Nav = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #88ccff;

  h1 {
    color: blue;
   
    text-shadow: 6px 2px 2px black;
    font-size: 4.2rem;
  }

  }
  nav {
    margin-top: 40px;
    margin-left: 20px;
    padding: 30px;

    a {
      text-decoration: none;
      color: white;
      font-size: 2.8rem;
      &:hover {
        color: blue;
      }
    }
  }
`;

const NavBar = () => {
    return (
      <Nav>
        
        <div>
          <h1>The Smurf Village ONLINE</h1>
        </div>
  
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </Nav>
    );
  };
  
  export default NavBar;