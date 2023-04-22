

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/" bg="dark">
        <Nav.Item>
            <Nav.Link eventKey="link-1" as={Link} to="/">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" as={Link} to="/skills">Skills</Nav.Link>
        </Nav.Item>        
        <Nav.Item>
            <Nav.Link eventKey="link-4" as={Link} to="/projects">Projects</Nav.Link>
        </Nav.Item>
    </Nav>   
  );
}

export { NavBar };
