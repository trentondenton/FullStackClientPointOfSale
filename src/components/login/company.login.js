import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

export default class CompanyLogin extends Component {
  constructor() {
    super();
    this.state = {
      successfulLogin: false,
      compUsername: '',
      compPassword: ''
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
      compUsername: this.state.compUsername,
      compPassword: this.state.compPassword
    }

    axios.post(`http://localhost:5000/api/v1/auth/company/login`, login)
      .then(res => {
        localStorage.setItem('token', res.data.data.token);
        this.setState({ successfulLogin: true });
      }
      )
      .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <Form className="paper" onSubmit={this.handleLogin}>
          <h3><BsPersonFill /></h3><h4>Company Portal</h4>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company Username"
              aria-label='Company Username'
              name="compUsername"
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Company Password"
              aria-label="Company Password"
              name="compPassword"
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
