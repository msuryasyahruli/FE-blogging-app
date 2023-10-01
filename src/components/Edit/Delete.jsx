import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Delete({ id_article, title, children }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(
        `${process.env.REACT_APP_API_KEY}/blogging/api/articles/${id_article}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        alert("article deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
      <div
        className="col-2"
        style={{ textAlign: "end" }}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <p
          style={{ fontWeight: 500, color: "red" }}
          className="btn p-0"
          onClick={handleShow}
        >
          Delete
          {children}
        </p>
      </div>
      <Modal show={show}>
        <form onSubmit={handleSubmit}>
          <h4 className="text-center p-3">Delete "{title}"?</h4>
          <div className="pl-5 pr-5 pb-3 justify-content-center d-flex">
            <button
              type="submit"
              className="btn btn-danger m-1"
              style={{ width: 100 }}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary m-1"
              style={{ width: 100 }}
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Delete;
