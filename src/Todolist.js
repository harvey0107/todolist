import React, {Component  } from "react";

class Todolist extends Component{
  render() {
    return (
      <div>
      <div><input/><button>Submit</button></div>
      <ul>
        <li>Learning React</li>
        <li>Work Out</li>
        <li>Finish Project</li>
      </ul>
      </div>
    )
  }
}
export default Todolist;
