import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Home />} />
        <Route path="/product/?slug=slug" element={<Product />} />
        <Route path="/products/:category/product/:slug" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
