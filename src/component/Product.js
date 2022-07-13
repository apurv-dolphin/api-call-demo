import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

export default function Product() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

  const apiGet = async () => {
    await fetch(
      `https://60ff90a3bca46600171cf36d.mockapi.io/api/products?slug=${slug}`
    )
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      {user.length === 1 && (
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title style={{ width: "456px" }}>
              <img className="card-img" src={user[0].image} alt=" not found" />
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h5 className="card-title">Name : {user[0].name}</h5>
            <h5 className="card-title">Category : {user[0].category}</h5>
            <h5 className="card-title">Price : {user[0].price}</h5>
          </Modal.Body>

          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </>
  );
}
