import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';

import EmployeeLogin from '../../components/login/employee.login';
import CompanyLogin from '../../components/login/company.login';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      isEmployee: true,
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick = () => {
    this.setState({ isEmployee: !this.state.isEmployee });
  }


  render() {
    return (
      <Container fluid>
        <Row className="paper-container">
          {this.state.isEmployee ? <EmployeeLogin /> : <CompanyLogin />}
        </Row>
        <Row className="button-container">
          <h6>Not {this.state.isEmployee ? 'an Employee' : 'a Company'}? Use our <Button variant="danger" onClick={this.handleButtonClick}>{this.state.isEmployee ? 'Company' : 'Employee'}</Button> Portal or&nbsp;<Link to="/signup" className="primary-link">Sign Up</Link>&nbsp;today!</h6>
        </Row>
        {this.state.successfulLogin && <Navigate to="/" />}
      </Container>
    )
  }
}