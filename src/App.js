import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import ServicesPage from "./components/Pages/ServicesPage";
import ProductionsPage from "./components/Pages/ProductionsPage";
import BlogPage from "./components/Pages/BlogPage";
import ContactPage from "./components/Pages/ContactPage";
import HomePage from "./components/Pages/HomePage";

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
        </Routes>
    </div>
  );
}

export default App;