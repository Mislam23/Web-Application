import './App.css';
import React, {Fragment} from "react"
//importing components below:
import TodoInput from "./components/TodoInput"

function App() {
  return (
    <Fragment>
      <div className="container">
        <TodoInput />
      </div>
    </Fragment>
  );
}

export default App;
