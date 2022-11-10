import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsCartPlusFill, BsCartDashFill, BsFillPencilFill } from 'react-icons/bs';

function POSItem(props) {
  return (
    <Card style={{ width: '18rem' }} className="paper">
      <Card.Img variant="top" src={props.product.prodImage} />
      <Card.Body>
        <Card.Title>{props.product.prodName}</Card.Title>
        <Card.Text>
          {props.product.prodDescription}
        </Card.Text>
        <Card.Text>
          {props.product.prodPrice}
        </Card.Text>
        <Button variant="danger"><BsCartDashFill /></Button>
        <Button variant="warning"><BsFillPencilFill /></Button>
        <Button variant="success" aria-label='Add to Cart'><BsCartPlusFill /></Button>
      </Card.Body>
    </Card>

  )
}

export default POSItem