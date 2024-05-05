import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import ProductionsPage from "./components/ProductionsPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import LegalNoticePage from "./components/LegalNoticePage";
import HomePage from "./components/HomePage";
import TopButton from "./components/TopButton";

function App() {
  /*Permet de faire apparaître le bouton "retour en haut" lorsqu'on se trouve tout en bas de la page */
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const scrollHeight = document.body.scrollHeight;
      const isBottom = scrollPosition >= scrollHeight;

      setShowTopButton(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/ServicesPage" element={<ServicesPage/>}></Route>
          <Route path="/ProductionsPage" element={<ProductionsPage/>}></Route>
          <Route path="/BlogPage" element={<BlogPage/>}></Route>
          <Route path="/ContactPage" element={<ContactPage/>}></Route>
          <Route path="/LegalNoticePage" element={<LegalNoticePage/>}></Route>
        </Routes>
        {showTopButton && <TopButton />}
        <Footer/>
    </div>
  );
}

export default App;