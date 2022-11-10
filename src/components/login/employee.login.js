import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

export default class EmployeeLogin extends Component {
  constructor() {
    super();
    this.state = {
      successfulLogin: false,
      empUsername: '',
      empPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    const login = {
      empUsername: this.state.empUsername,
      empPassword: this.state.empPassword
    }

    axios
      .post('http://localhost:5000/api/v1/auth/employee/login', login)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', JSON.stringify(res.data.data.token));
        this.setState({ successfulLogin: true });
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <Form className="paper" aria-label="Employee Login Form" onSubmit={this.handleLogin}>
          <h3><BsPersonFill /></h3><h4>Employee Portal</h4>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="empUsername"
              placeholder="Employee Username"
              aria-label="Employee Username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Employee Password"
              aria-label="Employee Password"
              name="empPassword"
              onChange={this.handleChange} />
          </Form.Group>
          <br />
          <Container>
            <Button variant="danger" type="submit">Login</Button>
          </Container>
        </Form>
        {this.state.successfulLogin && <Navigate to="/dashboard" />}
      </React.Fragment>
    )
  }
}