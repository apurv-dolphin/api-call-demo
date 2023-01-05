import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Grid({ Data }) {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <Container>
      <Row className="my-5">
        {Data.map((newdata) => {
          return (
            <Col md={4} sm={12} lg={3} key={newdata.id}>
              <Card
                height="400px"
                className="ap4"
                onClick={() => {
                  if (category === undefined) {
                    navigate(`/product/?slug=${newdata.slug}`);
                  } else {
                    navigate(
                      `/products/${newdata.category}/product/${newdata.slug}`
                    );
                  }
                }}
              >
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
  );
}
