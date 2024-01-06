import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [data, setData] = useState({
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
      .post(`${process.env.REACT_APP_API_KEY}/blogging/api/users/login`, data)
      .then((res) => {
        // console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id_user", res.data.data.id_user);
        Swal.fire("Success", "Login success", "success");
        // navigate("/landing");
        setTimeout(function () {
          navigate("/landing");
          window.location.reload();
        }, 1000);
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
          <h2 style={{ color: "#525252", marginBottom: 20 }}>Login</h2>
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
          <div
            className="d-flex justify-content-end mb-4"
            style={{ width: 450 }}
          >
            <Link to="" className="textbtnauth">
              Forgot password?
            </Link>
          </div>
          <button className="submitbtn mb-3" onClick={submit}>
            Sign In
          </button>
          <p>
            Don’t have account?{" "}
            <span>
              <Link to="/register" className="textbtnauth">
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
