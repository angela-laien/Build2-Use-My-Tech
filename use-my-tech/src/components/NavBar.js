import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #550C18;
`
const Button = styled.button`
  color: black;
`
const H1 = styled.h1`
  color: white;
`
const Div = styled.div`
  padding: 2.5%;
`

const NavBar = () => {
  return (
    <header>
      <Nav>
        <H1>Use My Tech</H1>
        <Div>
          <Link to='/'><Button>Register</Button></Link>
          <Link to='/UserPage'><Button>Shop</Button></Link>
          <Link to='/SearchForm'><Button>Search</Button></Link>
          <Link to='/Login'><Button>Login</Button></Link>
        </Div>
      </Nav>
    </header>
  );
};

export default NavBar;