import React from 'react';
import { Container, Row } from 'react-bootstrap';

import SignUpForm from '../../components/signup/signupform';

function SignUp() {
  return (
    <div>
      <Container fluid>
        <Row className="paper-container">
          <SignUpForm />
        </Row>
      </Container>
    </div>
  )
}

export default SignUp