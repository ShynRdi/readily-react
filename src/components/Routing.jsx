import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AddBooks from "../pages/AddBooks";
import Signup from "../pages/Signup";

const Routing = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/readily-react/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="addbooks" element={<AddBooks />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
