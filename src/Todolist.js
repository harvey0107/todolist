import React, {Component, Fragment  } from "react";

class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = {
      input:'',
      list:[]
    }
  }
  
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
