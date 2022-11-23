import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsCartPlusFill, BsCartDashFill, BsFillPencilFill } from 'react-icons/bs';

function POSItem(props) {
  const { prodImage, prodName, prodDescription, prodPrice } = props.product;
  return (
    <Card className="paper">
      {prodImage ? <Card.Img variant="top" src={prodImage} /> : <Card.Img variant="top" src="https://via.placeholder.com/400/000000/FFFFFF/?text=KaldrPOS" />}
      <Card.Body>
        <Card.Title>{prodName}</Card.Title>
        <Card.Text>
          {prodDescription}
        </Card.Text>
        <Card.Text>
          {prodPrice}
        </Card.Text>
        <Button variant="danger"><BsCartDashFill /></Button>
        <Button variant="warning"><BsFillPencilFill /></Button>
        <Button variant="success" aria-label='Add to Cart'><BsCartPlusFill /></Button>
      </Card.Body>
    </Card>

  )
}

export default POSItem