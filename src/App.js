import React from "react";
import {Route, Routes, Link} from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import ServicesPage from "./components/Pages/ServicesPage";
import ProductionsPage from "./components/Pages/ProductionsPage";
import BlogPage from "./components/Pages/BlogPage";
import ContactPage from "./components/Pages/ContactPage";
import LegalNoticePage from "./components/Pages/LegalNoticePage";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" component={<HomePage/>}></Route>
        <Route path="/ServicesPage" component={<ServicesPage/>}></Route>
        <Route path="/ProductionsPage" component={<ProductionsPage/>}></Route>
        <Route path="/BlogPage" component={<BlogPage/>}></Route>
        <Route path="/ContactPage" component={<ContactPage/>}></Route>
        <Route path="/LegalNoticePage" component={<LegalNoticePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;