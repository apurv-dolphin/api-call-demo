import { Button } from "bootstrap";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Search(Data) {
  console.log(Data);
  return (
    <>
      <Container>
        <Row className="my-5">
          {Data.map((newdata) => {
            return (
              <Col className="col-md-3" key={newdata.id}>
                <Card height="400px" className="ap4">
                  <Card.Img variant="top" height="200px" src={newdata.image} />
                  <Card.Body>
                    <h6> Name: {newdata.name} </h6>
                    <h6> Category: {newdata.category} </h6>
                    <h6> Price: {newdata.price} </h6>
                    <Button variant="primary"> Buy </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
