import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default class AddProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodName: '',
      prodDescription: '',
      prodPrice: 0,
      prodQuantity: 0,
      prodImage: null,
      prodCategory: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };
    const data = {
      prodName: this.state.prodName,
      prodDescription: this.state.prodDescription,
      prodPrice: this.state.prodPrice,
      prodQuantity: this.state.prodQuantity,
      prodImage: this.state.prodPicture,
      prodCategory: this.state.prodCategory,
    };

    axios
      .post('http://localhost:5000/api/v1/product', data, config)
      .then((res) => {
        console.log(res);
        this.setState({
          prodName: '',
          prodDescription: '',
          prodPrice: 0,
          prodQuantity: 0,
          prodImage: null,
          prodCategory: '',
        });
        this.props.getProducts();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.props.onHide();
      });
  }


  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="prodName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="prodName"
                onChange={this.onChange}
                placeholder="Enter Product Name"
              />
            </Form.Group>
            <Form.Group controlId="prodDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="prodDescription"
                onChange={this.onChange}
                placeholder="Enter Product Description"
              />
            </Form.Group>
            <Form.Group controlId="prodPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="float"
                name="prodPrice"
                onChange={this.onChange}
                placeholder="Enter Product Price"
              />
            </Form.Group>
            <Form.Group controlId="prodQuantity">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                name="prodQuantity"
                onChange={this.onChange}
                placeholder="Enter Product Quantity"
              />
            </Form.Group>
            <Form.Group controlId="prodPicture">
              <Form.Label>Product Picture</Form.Label>
              <Form.Control
                type="file"
                name="prodImage"
                onChange={this.onChange}
                placeholder="Enter Product Picture"
              />
            </Form.Group>
            <Form.Group controlId="prodCategory">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                type="text"
                name="prodCategory"
                onChange={this.onChange}
                placeholder="Enter Product Category"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}
