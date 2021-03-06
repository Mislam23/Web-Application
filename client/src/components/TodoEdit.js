import React, {Fragment, useState} from "react";

const TodoEdit = ({todo}) => {
  const [description, setDescription] = useState(todo.description)
  // console.log(props.todo)

  const editDescription = async (event) => {
    event.preventDefault();
    try {
      const body = {description};



      const response = await fetch(`/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  };
 
  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
      <button 
        type="button" 
        className="btn btn-outline-warning form-control" 
        data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button 
                type="button" 
                class="close" 
                data-dismiss="modal" 
                onClick={() => setDescription(todo.description)}>
                &times;
              </button>
            </div>

            <div 
              class="modal-body">
              <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
            </div>

            <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-warning" 
                data-dismiss="modal"
                onClick = {event => editDescription(event)}
                >Edit 
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default TodoEdit;