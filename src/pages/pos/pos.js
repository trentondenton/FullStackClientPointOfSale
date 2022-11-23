import React, { Component } from 'react';
import axios from 'axios';
import { Button, Row } from 'react-bootstrap';
import { BsCartFill } from 'react-icons/bs';

import Loading from '../../components/loading/loading';
import POSItem from '../../components/pos/pos.item';
import Cart from '../../components/pos/cart';
export default class POS extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      cartHidden: true,
      isLoading: true,
    }

    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(product) {
    let cart = this.state.cart;
    cart.push(product);
    this.setState({
      cart: cart
    })
  }

  removeFromCart(product) {
    let cart = this.state.cart;
    let index = cart.indexOf(product);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    })
  }

  componentDidMount() {
    this.getProducts();
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
        console.error(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      }
      )
  }

  render() {
    return (
      this.state.isLoading ? <Loading /> :
        <React.Fragment>
          <Row className="myflex mt-5">
            <h1>Products</h1>
          </Row>
          <div className="mygrid mt-5">
            {this.state.products.map(product => {
              return (
                <POSItem key={product.productID} product={product} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />)
            })}
          </div>
          {this.state.cartHidden ?
            <Row className="fixed-bottom">
              <Button variant="dark" onClick={() => this.setState({ cartHidden: !this.state.cartHidden })}>Checkout <BsCartFill /></Button>
            </Row>
            :
            <Cart cart={this.state.cart} />}

        </React.Fragment>
    )
  }
}
