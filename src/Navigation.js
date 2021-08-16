import React from'react';
import {Nav, Navbar,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './resource/main_icon.svg';
function Navigation(){
    return(
        <div className="Navigation">
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="App.js">
    <img
      alt=""
      src={require("./resource/main_icon.png").default} // 이미지 깨짐 방지.
      width="30"
      height="30"
      className="d-inline-block align-top"
    />{' '}
    MPF</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#">test1op</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );

}
export default Navigation; 

