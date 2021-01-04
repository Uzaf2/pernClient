import React, { Fragment, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';

const InputTodo = () => {
  const [description, setDescription] = useState("");

  var style = {
    color: "#FFFFFF",
    height: "70px",
    width: "100%"
  };
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("https://pernserver.herokuapp.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <nav class="navbar navbar-dark bg-dark" style={style}> Pern Todo List Application </nav>
      <h1 className="text-center mt-5"></h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
