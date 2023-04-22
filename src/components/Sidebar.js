import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Sidebar() {
return (
  <div className='sidebar'>
    <Nav className="flex-column">
        <h5>Portafolio Ivette</h5>
        <Nav.Item>
          <Nav.Link as={Link} to="/">General</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/skills">Hard Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/softskills">Soft Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export {Sidebar};