import React from 'react'
import { Table, Image, Form, Accordion } from 'react-bootstrap';
function ProductTable(props) {
  const products = props.product
  const listProducts = products.map((product) =>
    <tr key={product.productID}>
      <td>{product.productPicture ?
        <Image fluid roundedCircle src={product.productPicture} alt="Product" /> :
        <Image fluid roundedCircle src="https://via.placeholder.com/40" alt="Product" />
      }</td>
      <td>{product.prodName}</td>
      <td>{product.prodPrice}</td>
      <td>{product.prodCategory}</td>
      <td>{product.prodDescription}</td>
      <td>{product.prodQuantity}</td>
    </tr>
  );
  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {listProducts}
      </tbody>
    </Table>
  )
}

export default ProductTable