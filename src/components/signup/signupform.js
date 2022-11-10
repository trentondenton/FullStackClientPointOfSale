import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      compName: '',
      compPhone: '',
      compAddress: '',
      compInfo: '',
      compEmail: '',
      compPassword: '',
      compLogo: '',
      compColor: '',
      compUsername: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToken = this.handleToken.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCompany = {
      compName: this.state.compName,
      compPhone: this.state.compPhone,
      compAddress: this.state.compAddress,
      compInfo: this.state.compInfo,
      compEmail: this.state.compEmail,
      compPassword: this.state.compPassword,
      isCompany: true,
      compColor: this.state.compColor,
      compLogo: this.state.compLogo,
      compUsername: this.state.compUsername,
    }
    axios.post('http://localhost:5000/api/v1/company', newCompany)
      .then(res =>
        this.handleToken(res.data.token)
      )
      .catch(err => console.log(err))

  }

  handleToken(token) {
    localStorage.setItem('token', token);
    this.setState({ successfulLogin: true });
  }

  render() {
    return (
      <React.Fragment>
        <Form className="paper-sign-up" onSubmit={this.handleSubmit}>
          <h3><BsPersonFill /></h3><h4>Sign Up</h4>
          <p>This creates the Admin account. Employees must be created by the Admin account. Through the Company Portal</p>
          <p></p>
          <Form.Group controlId="compName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} placeholder="CompanyName" name="compName" />
          </Form.Group>
          <br />
          <Form.Group controlId="compPhone">
            <Form.Label>Phone Number: Format as XXX-XXX-XXXX</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} placeholder="Phone Number" name="compPhone" />
          </Form.Group>
          <br />
          <Form.Group controlId="compAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} placeholder="Address" name="compAddress" />
          </Form.Group>
          <br />
          <Form.Group controlId="compInfo">
            <Form.Label>Company Bio: Limit 350 characters</Form.Label>
            <Form.Control as="textarea" type="text" onChange={this.handleChange} placeholder="Company Bio" name="compInfo" />
          </Form.Group>
          <br />
          <Form.Group controlId="compEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={this.handleChange} placeholder="Email Address" name="compEmail" />
          </Form.Group>
          <br />
          <Form.Group controlId="compUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" onChange={this.handleChange} placeholder="Company Username" name="compUsername" />
          </Form.Group>
          <br />
          <Form.Group controlId="compPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={this.handleChange} placeholder="Password" name="compPassword" />
          </Form.Group>
          <br />
          <Container>
            <Button variant="danger" type="submit">Sign Up</Button>
          </Container>
        </Form>
        {this.state.successfulLogin && <Navigate to="/dashboard" />}
      </React.Fragment>
    )
  }
}