import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function List({ Data }) {
  let navigate = useNavigate();
  const { category } = useParams();

  return (
    <>
      <Container>
        <center>
          {Data.map((newdata) => {
            return (
              <div className="container bcontent" key={newdata.id}>
                <div
                  className="card"
                  style={{ width: "500px", margin: "16px" }}
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
                  <div className="row no-gutters">
                    <div className="col-sm-5">
                      <img
                        className="card-img"
                        src={newdata.image}
                        alt=" not found"
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h4 className="card-title"> Name: {newdata.name} </h4>
                        <h4 className="card-title">
                          Category: {newdata.category}
                        </h4>
                        <h4 className="card-title"> Price: {newdata.price} </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </center>
      </Container>
    </>
  );
}
