import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';

export default class CompanyDashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }


  }

  render() {
    const { compAddress, compEmail, compName, compPhone, compColor, compLogo, compID } = this.props.company;
    return (
      <Container fluid >
        <Row className="myflex mt-5">
          <h1> Company Dashboard</h1>
          <h2>Welcome back, {compName}!</h2>
        </Row>
        <hr />
        <Row>
          <Col className="info-container-header">
            <h3>Company Information</h3>
            <hr />
            <p>Company ID: <b>{compID}</b></p>
            <p>Company Name: <b>{compName}</b></p>
            <p>Address: <b>{compAddress}</b></p>
            <p>Email: <b>{compEmail}</b></p>
            <p>Phone: <b>{compPhone}</b></p>
            <p> <Button variant="danger"><BsFillPencilFill /></Button></p>
          </Col>
          <Col className="info-container-header">
            <h3>Company Aesthetic</h3>
            <hr />
            <p>Company Color: <span style={{ backgroundColor: `${compColor}`, height: '5px', width: '5px' }}>◯</span><b>{compColor}</b></p>
            {compLogo != null ?
              <p>Company Logo: <img src={compLogo} alt="CompanyLogo" aria-label='Company Logo' /></p>
              :
              <p>Company Logo:
                <br />
                <img src='https://via.placeholder.com/150' alt="CompanyLogo" aria-label='Company Logo' /></p>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}