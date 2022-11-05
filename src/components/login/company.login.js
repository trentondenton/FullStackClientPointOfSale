import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

export default function CompanyLogin() {
  return (
    <React.Fragment>
      <Form className="paper">
        <h3><BsPersonFill /></h3><h4>Company Portal</h4>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br />
        <Container>
          <Button variant="danger" type="submit">Login</Button>
        </Container>
      </Form>
    </React.Fragment>
  )
}
