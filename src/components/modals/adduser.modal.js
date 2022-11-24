import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empFirstName: '',
      empLastName: '',
      empUsername: '',
      empDOB: Date,
      empPhone: '',
      empPassword: '',
      empStartDate: Date,
      empEndDate: null,
      empPicture: null,
      empSalary: 0,
      empHourly: 0,
      empStatus: true,
      empLevel: 0,
      empSSN: '',
      titleID: 0,
      titles: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getTitles = this.getTitles.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getTitles() {
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    axios.get('https://kaldr-pos-backend.herokuapp.com/api/v1/title', config)
      .then(res => {
        this.setState({ titles: res.data.data.titles });
      })
      .catch(err => {
        console.error(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    const data = {
      empFirstName: this.state.empFirstName,
      empLastName: this.state.empLastName,
      empUsername: this.state.empUsername,
      empDOB: this.state.empDOB,
      empPhone: this.state.empPhone,
      empEmail: this.state.empEmail,
      empPassword: this.state.empPassword,
      empStartDate: this.state.empStartDate,
      empEndDate: this.state.empEndDate,
      empPicture: this.state.empPicture,
      empSalary: this.state.empSalary,
      empHourly: this.state.empHourly,
      empStatus: this.state.empStatus,
      empSSN: this.state.empSSN,
      empLevel: this.state.empLevel,
      titleID: this.state.titleID
    }
    axios
      .post('https://kaldr-pos-backend.herokuapp.com/api/v1/employee', data, config)
      .then((res) => {
        this.setState({
          empFirstName: '',
          empLastName: '',
          empUsername: '',
          empDOB: Date,
          empPhone: '',
          empPassword: '',
          empEmail: '',
          empStartDate: Date,
          empEndDate: null,
          empPicture: null,
          empSalary: 0,
          empHourly: 0,
          empStatus: true,
          empSSN: '',
          titleID: 0,
          titles: []
        })
        this.props.getEmployees();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.props.onHide();
      });


  }

  handleSelect = (e) => {
    this.setState({ titleID: e.target.value });
  }

  componentDidMount() {
    this.getTitles();
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="empFirstName" placeholder="Enter first name" onChange={this.onChange} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="empLastName" onChange={this.onChange} placeholder="Enter last name" />
            </Form.Group>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Select as="select" onChange={this.onChange} name="titleID">
                <option value={0}>Select Title</option>
                {this.state.titles?.map(title => (
                  <Form.Control as="option" key={title.titleID} value={title.titleID}>{title.title}</Form.Control>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formBasicSSN">
              <Form.Label>SSN</Form.Label>
              <Form.Control type="text" name="empSSN" onChange={this.onChange} placeholder="Enter SSN" />
            </Form.Group>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="empUsername" onChange={this.onChange} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="empEmail" onChange={this.onChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="empPassword" onChange={this.onChange} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="empDOB" onChange={this.onChange} placeholder="Enter date of birth" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" name="empPhone" onChange={this.onChange} placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group controlId="formBasicSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" name="empSalary" onChange={this.onChange} placeholder="Enter salary" />
            </Form.Group>
            <Form.Group controlId="formBasicHourly">
              <Form.Label>Hourly</Form.Label>
              <Form.Control type="text" name="empHourly" onChange={this.onChange} placeholder="Enter hourly" />
            </Form.Group>
            <Form.Group controlId="formBasicStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="empStartDate" onChange={this.onChange} placeholder="Enter start date" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal >
    )
  }
}
