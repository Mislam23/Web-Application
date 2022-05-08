import React, {Fragment, useState} from "react";

const TodoEdit = (props) => {
  const [description, setDescription] = useState(props.todo.description)
  // console.log(props.todo)
  return (
    <Fragment>
      {/* <!-- Button to Open the Modal --> */}
      <button 
        type="button" 
        className="btn btn-outline-warning form-control" 
        data-toggle="modal" 
        data-target={`#id${props.todo.todo_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${props.todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div 
              class="modal-body">
              <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}/>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">Edit</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default TodoEdit;