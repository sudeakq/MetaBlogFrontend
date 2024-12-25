import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages";
import BlogListing from "../pages/blogListing";
import SinglePost from "../pages/singlePost";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListing />} />
        <Route path="/post" element={<SinglePost />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
