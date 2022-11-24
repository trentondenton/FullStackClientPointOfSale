import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Container, Navbar as NavBar, Nav } from 'react-bootstrap';
import {
  BsHouseFill,
  BsPersonBadgeFill,
  BsDoorOpenFill,
  BsPersonCircle,
  BsShopWindow,
  BsGearFill
} from 'react-icons/bs';

import { useUser, useUserLogout } from '../../utils/UserProvider';
import { useCompany, useCompanyLogout } from '../../utils/CompanyProvider';
function Navbar() {
  const [page, setPage] = useState('/');
  const { user } = useUser();
  const { company } = useCompany();
  const logoutUser = useUserLogout();
  const logoutCompany = useCompanyLogout();
  const navigate = useNavigate();

  function handleLogout() {
    company !== null ? logoutCompany() : logoutUser();
    localStorage.removeItem('token');
    navigate('/');
  }




  useEffect(() => {
    const loggedIn = () => {
      return user || company;
    };
    loggedIn();
  }, [user, company]);

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
            {company !== null ?
              <React.Fragment>
                <Nav.Item>
                  <Nav.Link as={Link}
                    eventKey="/settings"
                    to="/settings"
                    aria-label="Settings"
                  >
                    <BsGearFill />
                  </Nav.Link>
                </Nav.Item>
              </React.Fragment>
              :
              null
            }
            {user !== null || company !== null ?
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
                    <BsShopWindow />
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