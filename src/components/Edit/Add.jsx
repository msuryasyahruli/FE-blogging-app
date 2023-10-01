import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const id_user = localStorage.getItem("id_user");
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    article: "",
    user_id: id_user,
    blog_id: "",
  });

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_KEY}/blogging/api/articles`, article)
      .then((res) => {
        alert("article created");
        navigate("/landing");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div
              className="d-flex mt-2"
              style={{ justifyContent: "space-between" }}
            >
              <Link to="/landing"><span style={{fontSize: 20}}>←</span>Back</Link>
              <button
                type="submit"
                style={{
                  width: 100,
                  height: 30,
                  backgroundColor: "#fff",
                  border: 0,
                  boxShadow: "0 0 2px 0 #000",
                  borderRadius: 5,
                }}
              >
                Post
              </button>
            </div>
            <input
              type="text"
              placeholder="Title"
              className="w-100 pl-3 mb-3 mt-3"
              style={{
                height: 45,
                borderRadius: 5,
                boxShadow: "0 0 4px 0 #00000025",
                border: 0,
              }}
              name="title"
              value={article.title}
              onChange={handleChange}
            />
            <textarea
              placeholder="Article"
              className="w-100 p-3 mb-3 mt-3"
              style={{
                borderRadius: 5,
                boxShadow: "0 0 4px 0 #00000025",
                border: 0,
                height: "73vh",
              }}
              name="article"
              value={article.article}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
