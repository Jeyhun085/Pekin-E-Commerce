import { Routes, Route } from "react-router-dom";
import React from "react";
import Catalog from "./Catalog/Catalog";
import ButtonAppBar from "./Navbar/ButtonAppBar";
import Home from "./MainPages/Home";
import About from "./MainPages/About";
import Contact from "./MainPages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ButtonAppBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
