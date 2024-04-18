import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import ProductionsPage from "./components/ProductionsPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import LegalNoticePage from "./components/LegalNoticePage";
import HomePage from "./components/HomePage";

function App() {
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
        <Footer/>
    </div>
  );
}

export default App;