import React, {Fragment, useState} from "react";

const TodoInput = () => {

  const [description, setDescription] = useState("");
  const onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {description};
      const response = await fetch('/todos', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      window.location = "https://fullstack-crud-todolist-webapp.herokuapp.com/";
      // console.log(response)
    } catch (err) {
      console.error(err.message)
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 display-1">O'CRUD ~ Todo List</h1>
      <form className="d-flex" onSubmit={onFormSubmit}>
        <input type="text" className="form-control" placeholder="What's on your mind?" value={description} 
        onChange={event => setDescription(event.target.value)}/>
        <button className="btn btn-outline-info">Add to List</button>
      </form>
    </Fragment>
  );
};

export default TodoInput;