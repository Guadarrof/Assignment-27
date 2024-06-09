import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import MovieCatalog from "../pages/MovieCatalog";
import MovieDetail from "../pages/MovieDetail";

const RoutesApp = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movieCatalog" element={<MovieCatalog/>}/>
        <Route path="/movieDetail/:id" element={<MovieDetail/>}/>
      </Routes>
    </Router>
  );
};

export default RoutesApp;