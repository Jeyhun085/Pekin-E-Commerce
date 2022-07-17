import { Routes, Route } from "react-router-dom";
import React from "react";
import Catalog from "./Catalog/Catalog";
import ButtonAppBar from "./Navbar/ButtonAppBar";
import Home from "./MainPages/Home";
import About from "./MainPages/About";
import Contact from "./MainPages/Contact";
import Service from "./MainPages/Service";
import CartPage from "./Catalog/CartPage/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<ButtonAppBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
