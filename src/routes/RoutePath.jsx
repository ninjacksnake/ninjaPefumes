import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Perfumes from "../pages/perfumes";
import Profile from "../pages/profile";
import Register from "../pages/Register";



const RoutePath = ({filtred, filterPerf, searchPerf}) => {
  return (
    <Routes>
      <Route
        element={
          <Layout
            perf={filtred}
            filterPerf={filterPerf}
            searchPerf={searchPerf}
          />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="perfumes" element={<Perfumes perf={filtred} />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutePath;
