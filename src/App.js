import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import SearchBarKey from "./component/SearchBarKey";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/products/:category/product/:slug" element={<Product />} />
        <Route path="/search-key" element={<SearchBarKey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
