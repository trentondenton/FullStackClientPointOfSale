import React, { Component } from 'react';
import { Accordion, Table } from 'react-bootstrap';
import axios from 'axios';

import UserTable from '../../components/settings/user.table';
import ProductTable from '../../components/settings/products.table';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      products: [],
    };

    this.getEmployees = this.getEmployees.bind(this);
    this.products = this.getProducts.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
    this.editProductSubmit = this.editProductSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  getEmployees() {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    axios.get('http://localhost:5000/api/v1/employees', config)
      .then(res => {
        this.setState({ employees: res.data.data.employees });
      })
      .catch(err => {
        console.error(err);
      });
  }

  editEmployeeSubmit(editedEmployee) {
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    }
    const employee = {
      empFirstName: editedEmployee.empFirstName,
      empLastName: editedEmployee.empLastName,
      empUsername: editedEmployee.empUsername,
      empDOB: editedEmployee.empDOB,
      empPhone: editedEmployee.empPhone,
    }
    axios.put(`http://localhost:5000/api/v1/employee/${editedEmployee.empID}`, employee, config)
      .then(res => {
        console.log(res);
        this.getEmployees();
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteEmployee = (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    }
    axios.delete(`http://localhost:5000/api/v1/employee/${id}`, config)
      .then(res => {
        console.log(res);
        this.getEmployees();
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteProduct = (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    }
    axios.delete(`http://localhost:5000/api/v1/products/${id}`, config)
      .then(res => {
        console.log(res);
        this.getProducts();
      })
      .catch(err => {
        console.error(err);
      });
  }

  getProducts() {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    axios.get('http://localhost:5000/api/v1/products', config)
      .then(res => {
        this.setState({
          products: res.data.data.products
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  editProductSubmit = (product) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const editedProduct = {
      prodName: product.prodName,
      prodPrice: parseFloat(product.prodPrice),
      prodDescription: product.prodDescription,
      prodCategory: product.prodCategory,
      prodQuantity: parseInt(product.prodQuantity),
      prodImage: product.prodImage

    }
    axios.put(`http://localhost:5000/api/v1/products/${product.productID}`, editedProduct, config)
      .then(res => {
        this.getProducts();
      })
      .catch(err => {
        console.error(err);
      })
  }

  componentDidMount() {
    this.getEmployees();
    this.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <Accordion flush defaultActiveKey="0" variant="dark" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Employees</Accordion.Header>
            <Accordion.Body>
              <Table variant="dark" striped bordered hover>
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Hourly</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Employee</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map(employee => {
                    return <UserTable
                      key={employee.empID}
                      employee={employee}
                      editEmployeeClick={this.editEmployeeClick}
                      editEmployeeSubmit={this.editEmployeeSubmit}
                      deleteEmployee={this.deleteEmployee}
                    />
                  })}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion flush defaultActiveKey="0" variant="dark">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Products</Accordion.Header>
            <Accordion.Body>
              <Table variant="dark" striped bordered hover>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map(product => {
                    return <ProductTable
                      key={product.productID}
                      product={product}
                      editProductSubmit={this.editProductSubmit}
                      deleteProduct={this.deleteProduct}
                    />
                  })}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </React.Fragment>
    )
  }
}
