import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const submit = (e) => {
    axios
      .post(`http://localhost:3000/blogging/api/users/register`, data)
      .then((res) => {
        // console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id_user", res.data.data.id_user);
        Swal.fire("Success", "Register success", "success");
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Account doesnt exist!",
        });
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="auth">
          <h2 style={{ color: "#525252", marginBottom: 20 }}>Register</h2>
          <input
            className="input"
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={change}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={change}
          />
          <input
            className="input"
            type="password"
            placeholder="Passwrod"
            name="password"
            id="password"
            onChange={change}
          />
          <button className="submitbtn m-3" onClick={submit}>
            Sign Up
          </button>
          <p>
            Already have a account?{" "}
            <span>
              <Link to="/login" className="textbtnauth">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
