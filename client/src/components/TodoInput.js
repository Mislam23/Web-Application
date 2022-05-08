import React, {Fragment, useState} from "react";

export default function TodoInput() {

  const [description, setDescription] = useState("");

  return (
    <Fragment>
      <h1 className="text-center mt-5 display-1">Todo List</h1>
      <form className="d-flex">
        <imput type="text" className="form-control"/>
        <button className="btn btn-outline-info">Add to List</button>
      </form>
    </Fragment>
  )
}

