import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    article: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/blogging/api/articles/${id}`)
      .then((res) => {
        setArticle(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_API_KEY}/blogging/api/articles/${id}`,
        article
      )
      .then((res) => {
        window.location.reload();
        setArticle(res.data.data[0]);
        alert("article updated");
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
          <div>
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
                Save
              </button>
            </div>
            <input
              type="text"
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

export default Update;
