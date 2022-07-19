import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Catalog from "./Catalog/Catalog";
import ButtonAppBar from "./Navbar/ButtonAppBar";
import Home from "./MainPages/Home";
import About from "./MainPages/About";
import Contact from "./MainPages/Contact";
import Service from "./MainPages/Service";
import CartPage from "./Catalog/CartPage/CartPage";
import HashLoader from "react-spinners/HashLoader";


function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <HashLoader
          loading={loading}
          color={"#7c01a0"}
          cssOverride={{
            margin: "0 auto",
            height: "100vh",
          }}
          size={150}
        />
      ) : (
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
      )}
    </div>
  );
}

export default App;
