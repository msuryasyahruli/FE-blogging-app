import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../../pages/LandingPage.jsx";
import Login from "../../pages/Auth/Login.jsx";
import Register from "../../pages/Auth/Register.jsx";
import Detail from "../../pages/Detail.jsx";
import UpdatePage from "../../pages/Update.jsx";
import AddArticle from "../../pages/AddArticle.jsx";

const Router = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace="true"></Navigate>}
          />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/landing" replace="true"></Navigate>} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<AddArticle />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
