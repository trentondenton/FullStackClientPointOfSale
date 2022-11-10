import React, { Component } from 'react'

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
    this.props = props;
  }
  render() {
    return (
      <div>{this.props.cart}</div>
    )
  }
}
