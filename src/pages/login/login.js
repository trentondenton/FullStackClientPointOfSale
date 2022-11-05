import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';

import EmployeeLogin from '../../components/login/employee.login';
import CompanyLogin from '../../components/login/company.login';

function Login() {
  const [isEmployee, setIsEmployee] = useState(true);

  const handleButtonClick = () => {
    setIsEmployee(!isEmployee);
  }

  return (
    <Container fluid>
      <Row className="paper-container">
        {isEmployee ? <EmployeeLogin /> : <CompanyLogin />}
      </Row>
      <Row className="button-container">
        <h6>Not {isEmployee ? 'an Employee' : 'a Company'}? Use our <Button variant="danger" onClick={handleButtonClick}>{isEmployee ? 'Company' : 'Employee'}</Button> Portal or&nbsp;<Link to="/signup" className="primary-link">Sign Up</Link>&nbsp;today!</h6>
      </Row>
    </Container>
  )
}

export default Login