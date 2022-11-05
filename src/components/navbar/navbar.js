import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Navbar as NavBar, Nav } from 'react-bootstrap';
import { BsHouseFill, BsPersonBadgeFill } from 'react-icons/bs';
function Navbar() {
  const [page, setPage] = useState('/');

  return (
    <React.Fragment>
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand>KaldrPOS</NavBar.Brand>
        </Container>
        <Container>
          <Nav
            activeKey={page}
            onSelect={(selectedKey) => setPage(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/" to="/"><BsHouseFill /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/login" to="/login"><BsPersonBadgeFill /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </NavBar>
      <Outlet />
    </React.Fragment>
  )
}

export default Navbar