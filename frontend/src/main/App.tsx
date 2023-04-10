import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { BurialPage } from "../pages/BurialPage";
import { SupervisedPage } from "../pages/SupervisedPage";
import { UnsupervisedPage } from "../pages/UnsupervisedPage";
import { LoginPage } from "../pages/LoginPage";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/burial" element={<BurialPage />}></Route>
          <Route path="/supervised" element={<SupervisedPage />}></Route>
          <Route path="/unsupervised" element={<UnsupervisedPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
