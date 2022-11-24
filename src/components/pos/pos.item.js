import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { BsCartPlusFill, BsCartDashFill, BsFillPencilFill } from 'react-icons/bs';

function POSItem(props) {
  const { prodImage, prodName, prodDescription, prodPrice } = props.product;
  return (
    <Card className="paper">
      {prodImage ? <Image styles={{ width: '100px', height: '100px' }} variant="top" src={prodImage} /> : null}
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