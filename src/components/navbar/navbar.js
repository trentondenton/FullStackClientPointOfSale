import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Navbar as NavBar, Nav } from 'react-bootstrap';
import {
  BsHouseFill,
  BsPersonBadgeFill,
  BsDoorOpenFill,
  BsPersonCircle,
  BsFillGridFill
} from 'react-icons/bs';
function Navbar() {
  const [page, setPage] = useState('/');

  function handleLogout() {
    localStorage.removeItem('token');
  }

  function isLoggedIn() {
    return localStorage.getItem('token');
  }

  useEffect(() => {
    isLoggedIn()
  }, []);

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

            {isLoggedIn() ?
              <React.Fragment>
                <Nav.Item>
                  <Nav.Link as={Link}
                    eventKey="/dashboard"
                    aria-label='Dashboard'
                    to="/dashboard"
                  >
                    <BsPersonCircle />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link}
                    eventKey="/pos"
                    to="/pos"
                    aria-label='Point of Sale System'
                  >
                    <BsFillGridFill />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    eventKey="/logout"
                    to="/"
                    onClick={handleLogout}
                    aria-label="Logout"
                  >
                    <BsDoorOpenFill />
                  </Nav.Link>
                </Nav.Item>
              </React.Fragment>
              :
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  eventKey="/login"
                  to="/login"
                >
                  <BsPersonBadgeFill />
                </Nav.Link>
              </Nav.Item>
            }

          </Nav>
        </Container>
      </NavBar>
      <Outlet />
    </React.Fragment>
  )
}

export default Navbar