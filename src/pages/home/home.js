import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from '../../components/loading/loading';
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ?
        <div>
          <Loading />
        </div>
        :
        <div>
          <br />
          <br />
          <br />
          <Row className="myflex">
            <h1>Welcome to KaldrPOS</h1>
          </Row>
          <Row className="myflex">
            <h3>by TTech</h3>
          </Row>
          <br />
          <br />
          <br />
          <hr />
          <Row className="myflex">
            <Col>
              <h4>What is KaldrPOS?</h4>
              <p>KaldrPOS is a Point of Sale system that is designed to be used by both employees and companies. Employees can use KaldrPOS to monitor employees, keep track of inventory, and create orders!</p>
            </Col>
            <Col>
              <h4>Why KaldrPOS?</h4>
              <p>KaldrPOS was made by local Kansas developers at TTech using Python, Flask, PostgreSQL, JavaScript, React, and SCSS! It is a free open source solution to all for all of your company needs!</p>

            </Col>
          </Row>
          <hr />
          <br />
          <br />
          <br />
          <Row className="myflex">
            <h3>Ready to upgrade your Point of Sale System?</h3>
            <div className="button-container">
              <Button as={Link} to="/signup" variant="danger">Sign Up!</Button>
            </div>
          </Row>
        </div>
      }
    </div >
  )
}

export default Home