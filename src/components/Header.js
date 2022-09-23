import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../App.css';
//import '../_navigation.scss';

 class Header extends React.Component{
render(){
    return (
      
    <Navbar className="bg-corail" expand="lg" fixed="top" >
      <Navbar.Brand href="#home"><img src="./img/logo_kornac_blanc2.png" alt="logo" style={{marginLeft: 5}}  className="logo-navbar"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container fluid="md">
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-align-center">
            <Nav.Link href="#home" className="text-white">Acceuil</Nav.Link>
            <Nav.Link href="#link"className="text-white">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>  
    </Navbar>
   
);
}
}
export default Header;