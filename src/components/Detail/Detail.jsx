import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

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

  return (
    <>
      <div className="container">
        <div className="">
          <Link to="/landing"><span style={{fontSize: 20}}>←</span>Back</Link>
          {/* <div
            className="w-100 pl-3 pt-2 mb-3 mt-3"
            style={{
              height: 45,
              borderRadius: 5,
              boxShadow: "0 0 4px 0 #00000025",
            }}
          >
          </div> */}
          <div
            className="w-100 p-3 mb-3 mt-3"
            style={{ borderRadius: 5, boxShadow: "0 0 4px 0 #00000025" }}
          >
            <p style={{ fontWeight: 600, fontSize: 20 }}>{article.title}</p>
            <p>{article.article}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
