import React, { Component } from 'react';
import { Accordion, Button, Table, Row } from 'react-bootstrap';
import axios from 'axios';
import { BsPlusLg } from 'react-icons/bs';

import Loading from '../../components/loading/loading';
import UserTable from '../../components/settings/user.table';
import ProductTable from '../../components/settings/products.table';
import AddUserModal from '../../components/modals/adduser.modal';
import AddProductModal from '../../components/modals/addproduct.modal';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      products: [],
      addUserHide: false,
      addProductHide: false,
      isLoading: {
        employees: true,
        products: true
      }
    };

    this.getEmployees = this.getEmployees.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
    this.editProductSubmit = this.editProductSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.hideUserModal = this.hideUserModal.bind(this);
    this.hideProductModal = this.hideProductModal.bind(this);
  }

  hideProductModal() {
    this.setState({ addProductHide: !this.state.addProductHide });
  }
  hideUserModal = () => {
    this.setState({ addUserHide: !this.state.addUserHide });
  };
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
      })
      .finally(() => {
        this.setState({ isLoading: { employees: false } });
      })
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
      .finally(() => {
        this.setState({ isLoading: { products: false } });
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
      this.state.isLoading.employees || this.state.isLoading.products ? <Loading /> :
        <React.Fragment>
          <Accordion flush defaultActiveKey="0" variant="dark" className="mt-5 vw-100">
            <Accordion.Item eventKey="0" className="vw-100">
              <Accordion.Header>Employees</Accordion.Header>
              <Accordion.Body className="vw-100 p-0 m-0">
                <Row fluid className="add-emp-prod-container">
                  <Button variant="primary" className="m-2" onClick={this.hideUserModal}><BsPlusLg /> &nbsp; Add Employee</Button>
                </Row>
                <Table variant="dark" striped bordered hover className="vw-100 p-0 m-0">
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
                <AddUserModal show={this.state.addUserHide} onHide={this.hideUserModal} getEmployees={this.getEmployees} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion flush defaultActiveKey="0" variant="dark" className="vw-100 mt-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Products</Accordion.Header>
              <Accordion.Body className="vw-100 p-0 m-0">
                <Row fluid className="add-emp-prod-container">
                  <Button variant="primary" className="m-2" onClick={this.hideProductModal}><BsPlusLg /> &nbsp; Add Product</Button>
                </Row>
                <Table variant="dark" striped bordered hover className="vw-100 p-0 m-0">
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
                <AddProductModal show={this.state.addProductHide} onHide={this.hideProductModal} getProducts={this.getProducts} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </React.Fragment >
    )
  }
}
