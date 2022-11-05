import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { BsPersonFill } from 'react-icons/bs';

export default function SignUpForm() {

  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <Form className="paper-sign-up">
        <h3><BsPersonFill /></h3><h4>Sign Up</h4>
        <p>This creates the Admin account. Employees must be created by the Admin account. Through the Company Portal</p>
        <p></p>
        <Form.Group controlId="compName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="CompanyName" name="compName" />
        </Form.Group>
        <br />
        <Form.Group controlId="compPhone">
          <Form.Label>Phone Number: Format as XXX-XXX-XXXX</Form.Label>
          <Form.Control type="password" placeholder="Phone Number" name="compPhone" />
        </Form.Group>
        <br />
        <Form.Group controlId="compAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" name="compAddress" />
        </Form.Group>
        <br />
        <Form.Group controlId="compInfo">
          <Form.Label>Company Bio: Limit 350 characters</Form.Label>
          <Form.Control as="textarea" type="text" placeholder="Company Bio" name="compInfo" />
        </Form.Group>
        <br />
        <Form.Group controlId="compEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email Address" name="compEmail" />
        </Form.Group>
        <br />
        <Form.Group controlId="compEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="compPassword" />
        </Form.Group>
        <br />
        <Container>
          <Button variant="danger" type="submit">Sign Up</Button>
        </Container>
      </Form>
    </React.Fragment>
  )
}

// compID = db.Column(db.Integer, primary_key = True)
// compAddress = db.Column(db.String(100), unique = True, nullable = False)
// compInfo = db.Column(db.String(350), nullable = False)
// compColor = db.Column(db.String(6), unique = False, nullable = True)
// compUsername = db.Column(db.String(50), unique = True, nullable = False)
// compPassword = db.Column(db.String(100), unique = False, nullable = False)
// compEmail = db.Column(db.String(50), unique = True, nullable = False)
// isCompany = db.Column(db.Boolean, default=True)