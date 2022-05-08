import React, {Fragment, useEffect, useState} from "react";
//my notes: useEffect will help us by making fetch requests to our restful api, whenever the TodoList component gets  rendered

const TodoList = () => {

  const [todos, setTodos] = useState([])

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE"
      })
      // console.log(deleteTodo);
    } catch (err) {
      console.error(err.message)
    }
  }

  const getTodos = async () =>  {
    try {
      const response = await fetch("http://localhost:4000/todos")
      const jsonData = await response.json()

      setTodos(jsonData)
      // console.log(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos();
  }, [])
  // console.log(todos)

  return (
    <Fragment>
      <table className="table mt-5 form-control-sm"> 
        <thead>
          <tr>
            <th>Description</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><button className="btn btn-outline-warning form-control">Edit</button></td>
              <td><button className="btn btn-outline-danger form-control" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default TodoList;