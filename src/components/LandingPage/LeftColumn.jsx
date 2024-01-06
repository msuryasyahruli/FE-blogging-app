import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftColumn = () => {
  const id_user = localStorage.getItem("id_user");
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/blogging/api/users/profile/${id_user}`)
      .then((res) => {
        setUsers(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
      // eslint-disable-next-line
  }, []);

  // const [blog, setBlog] = useState([]);
  
  // useEffect(()=>{
  //   axios.get(`${process.env.REACT_APP_API_KEY}/blogging/api/blogs/${id_user}`)
  //   .then((res)=>{
  //     setBlog(res.data.data[0])
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  //   // eslint-disable-next-line
  // }, [])

  return (
    <>
      <div
        className="col-3"
        style={{ height: "90vh", borderRight: "1px solid #D5D5D5" }}
      >
        <div>
          <h5>{users.username}</h5>
        </div>
        {/* <div className="dropdown">
          <button
            className="btn dropdown-toggle w-100 p-0"
            type="button"
            id="dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{
              textAlign: "start",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 18,
            }}
          >
            {blog.blog_title}
          </button>
          <div className="dropdown-menu w-100" aria-labelledby="dropdown">
            <button className="dropdown-item" type="button">
              Blog 1
            </button>
            <button className="dropdown-item" type="button">
              Blog 2
            </button>
            <hr className="m-2" />
            <button
              className="dropdown-item"
              type="button"
              style={{ textAlign: "center" }}
            >
              Add blog
            </button>
          </div>
        </div> */}
        <Link
          to="/add"
          className="w-100 btn"
          style={{
            borderRadius: 100,
            border: 0,
            height: 40,
            boxShadow: "0 0 4px 0 #00000025",
            backgroundColor: "#fff",
          }}
        >
          ADD NEW POST
        </Link>
        <hr />
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-post-tab"
            data-toggle="pill"
            href="#v-pills-post"
            role="tab"
            aria-controls="v-pills-post"
            aria-selected="true"
          >
            Post
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Edit
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Settings
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftColumn;
