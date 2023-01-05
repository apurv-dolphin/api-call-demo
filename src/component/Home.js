import { Suspense, lazy, useEffect, useState } from "react";
import {
  Container,
  NavDropdown,
  Nav,
  Navbar,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import Pagination from "./Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "./Loader";

const Grid = lazy(() => import("./Grid"));
const List = lazy(() => import("./List"));

export default function Home() {
  const [view, setView] = useState(true);
  const [data, setData] = useState([]);
  const [, setSort] = useState();
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage] = useState(8);
  const [searchInput, setSearchInput] = useState([]);
  const [filter, setFilter] = useState("");
  const nevigate = useNavigate();
  const { category } = useParams();

  // pagination method start
  const indexofLastpost = currentpage * postperpage;
  const indexofFirstpost = indexofLastpost - postperpage;
  const currentPosts = data.slice(indexofFirstpost, indexofLastpost);

  //change page of pagination
  const paginate = (pageNumbers) => setCurrentpage(pageNumbers);
  // end

  // end

  // sorting method start
  const sortAscending = () => {
    setSort("asc");
    const sortascData = data.sort(function (a, b) {
      return a.price - b.price;
    });
    setData(sortascData);
  };

  const sortDescending = () => {
    setSort("dsc");
    const sortdscData = data.sort(function (a, b) {
      return b.price - a.price;
    });
    setData(sortdscData);
  };
  // soting method end

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setData(searchInput);
    } else {
      const filterdata = data.filter((elem) =>
        elem.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(filterdata);
      setData(filterdata);
    }
    setFilter(e.target.value);
  };

  // remove the same category name
  const result = data.reduce((finalresult, current) => {
    let obj = finalresult.find((item) => item.category === current.category);
    if (obj) {
      return finalresult;
    }
    return finalresult.concat([current]);
  }, []);

  const filterdropdown = (carditem) => {
    const filcard = data.filter((cardData) => {
      return cardData.category === carditem.category;
    });
    if ({ category }) {
      nevigate(`/products/${carditem.category}`);
      setData(filcard);
    }
  };

  const apiGet = async () => {
    await fetch("https://60ff90a3bca46600171cf36d.mockapi.io/api/products")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setSearchInput(response);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <Container>
      <h1 bg="light" style={{ textAlign: "center" }}>
        Product List
      </h1>
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                // className={`btn ${view ? "btn-success" : "btn-secondary"}`}        othrer method
                // className={view ? "btn btn-success" : "btn btn-secondary"}          another method

                className={"btn ".concat(
                  view ? "btn-success" : "btn-secondary"
                )} // string concat
                onClick={() => {
                  setView(true);
                }}
              >
                Grid
              </button>
              <button
                type="button"
                className={"btn ".concat(
                  view ? "btn-secondary" : "btn-success"
                )}
                onClick={() => {
                  setView(false);
                }}
              >
                List
              </button>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="category" id="navbarScrollingDropdown">
                {result.map((item, index) => (
                  <NavDropdown.Item
                    key={index}
                    onClick={() => filterdropdown(item)}
                  >
                    {item.category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="sort by price" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => sortAscending()}>
                  Assending
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => sortDescending()}>
                  Dessending
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={filter}
                onChange={(e) => handleSearch(e)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        {view ? (
          <Grid Data={(data, currentPosts)} />
        ) : (
          <List Data={(data, currentPosts)} />
        )}
      </Suspense>
      <Pagination
        postperpage={postperpage}
        totalPost={data.length}
        paginate={paginate}
      />
    </Container>
  );
}
