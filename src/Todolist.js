import React, {Component, Fragment  } from "react";

class Todolist extends Component{
  render() {
    return (
      <Fragment>
      <div><input/><button>Submit</button></div>
      <ul>
        <li>Learning React</li>
        <li>Work Out</li>
        <li>Finish Project</li>
      </ul>
      </Fragment>
    )
  }
}
export default Todolist;
