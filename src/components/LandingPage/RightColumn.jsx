import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Delete from "../Edit/Delete";
import axios from "axios";

const RightColumn = () => {
  const navigate = useNavigate();
  const isLogout = () => {
    localStorage.clear();
    setTimeout(function () {
      navigate("/login");
    }, 1000)
    
  };

  const id_user = localStorage.getItem("id_user");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_KEY}/blogging/api/users/profile/${id_user}`
      )
      .then((res) => {
        setUsers(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  // const [blog, setBlog] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_KEY}/blogging/api/blogs/${id_user}`)
  //     .then((res) => {
  //       setBlog(res.data.data[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // eslint-disable-next-line
  // }, []);

  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/blogging/api/articles/user/${id_user}`)
      .then((res) => {
        setArticle(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <style>
        .article {"{"}
        display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp:
        2; overflow: hidden; text-overflow: ellipsis;{"}"}
        .title {"{"}
        overflow:hidden; text-overflow: ellipsis; white-space:nowrap;{"}"}
      </style>
      <div className="col-9 h-100 pb-5">
        <h5 className="pb-3 pt-1">
          {/* {!blog.blog_title ? "create new blog" : blog.blog_title} */}
        </h5>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-post"
            role="tabpanel"
            aria-labelledby="v-pills-post-tab"
          >
            {article.map((article, index) => (
              <div
                key={index}
                className="w-100 p-3 mb-3"
                style={{
                  borderRadius: 5,
                  boxShadow: "0 0 4px 0 #00000025",
                }}
              >
                <div className="d-flex">
                  <Link
                    to={`/detail/${article.id_article}`}
                    className="col-10 btn"
                  >
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        textAlign: "start",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      style={{
                        color: "#989898",
                        textAlign: "start",
                        margin: 0,
                      }}
                    >
                      Created at . {article.created_at}
                    </p>
                  </Link>
                  <div className="col-2" style={{ textAlign: "end" }}>
                    <p className="title" style={{ fontWeight: 500 }}>
                      {users.username}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            {article.map((article, index) => (
              <div
                key={index}
                className="w-100 p-3 mb-3"
                style={{
                  borderRadius: 5,
                  boxShadow: "0 0 4px 0 #00000025",
                }}
              >
                <div className="d-flex">
                  <Link
                    to={`/update/${article.id_article}`}
                    className="col-10 btn"
                  >
                    <p
                      className="title"
                      style={{
                        fontSize: 16,
                        lineHeight: 1,
                        fontWeight: 500,
                        textAlign: "start",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      className="article"
                      style={{
                        color: "#989898",
                        textAlign: "start",
                        margin: 0,
                      }}
                    >
                      {article.article}
                    </p>
                  </Link>
                  <Delete
                    id_article={article.id_article}
                    title={article.title}
                  ></Delete>
                </div>
              </div>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <div
              className="w-100 p-3 mb-3"
              style={{ borderRadius: 5, boxShadow: "0 0 4px 0 #00000025" }}
            >
              <div className="p-1">
                <p className="m-0">Username</p>
                <input className="w-50 rounded" type="text" value={users.username} />
              </div>
              <div className="p-1">
                <p className="m-0">Email</p>
                <input className="w-50 rounded" type="Email" value={users.email} />
              </div>
              {/* <div className="p-1 pt-3">
                <button className="btn-primary">Update</button>
              </div> */}
              <div className="p-1 pt-3">
                <button className="btn-danger rounded" onClick={isLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightColumn;
