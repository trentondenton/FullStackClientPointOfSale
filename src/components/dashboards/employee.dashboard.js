import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';

export default class EmployeeDashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    }

    this.convertCurrency = this.convertCurrency.bind(this);

  }

  convertCurrency(num) {
    let pay = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
    return pay;
  }

  render() {
    console.log(this.props.props)
    const { compID, compName, empDOB, empEmail, empFirstName, empHourly, empSalary, empStartDate, empTitle, empLastName, empID } = this.props.props;
    return (
      <Container fluid >
        <Row className="myflex mt-5">
          <h1>{compName} Employee Dashboard</h1>
          <h2>Welcome back, {empFirstName}!</h2>
        </Row>
        <hr />
        <Row>
          <Col className="info-container-header">
            <h3>Employee Information</h3>
            <hr />
            <p>Employee ID: <b>{empID}</b></p>
            <p>First Name: <b>{empFirstName}</b></p>
            <p>Last Name: <b>{empLastName}</b></p>
            <p>Email: <b>{empEmail}</b></p>
            <p>DOB: <b>{empDOB}</b></p>
            {empSalary ? <p>Salary: <b>{this.convertCurrency(empSalary)}</b></p> : <p>Hourly: <b>{this.convertCurrency(empHourly)}</b></p>}
            <p>Job Title: <b>{empTitle}</b></p>
          </Col>
          <Col className="info-container-header">
            <h3>Company Information</h3>
            <hr />
            <p>Company ID: <b>{compID}</b></p>
            <p>Company Name: <b>{compName}</b></p>
            <p>Start Date: <b>{empStartDate}</b></p>
          </Col>
        </Row>
        <p> <Button variant="danger"><BsFillPencilFill /></Button></p>
      </Container>
    )
  }
}