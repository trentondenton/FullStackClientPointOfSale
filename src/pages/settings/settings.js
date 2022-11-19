import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

import UserTable from '../../components/settings/user.table';
import ProductTable from '../../components/settings/products.table';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      products: []
    };

    this.getEmployees = this.getEmployees.bind(this);
    this.products = this.getProducts.bind(this);
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
        console.log(err);
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


  componentDidMount() {
    this.getEmployees();
    this.getProducts();
  }

  render() {
    return (
      <React.Fragment>
        <Accordion defaultActiveKey="0" variant="dark" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Employees</Accordion.Header>
            <Accordion.Body>
              <UserTable employee={this.state.employees} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0" variant="dark" className="mt-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Products</Accordion.Header>
            <Accordion.Body>
              <ProductTable product={this.state.products} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </React.Fragment>

    )
  }
}
