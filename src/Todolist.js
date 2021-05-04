import React, {Component, Fragment  } from "react";

class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = {
      input:'',
      list:[]
    }
  }
  
  handleInputChange(event){
    console.log(event.target.value)
  }

  render() {
    return (
      <Fragment>
      <div>
        <input value={this.state.input} onChange={this.handleInputChange}
        />
        <button>Submit</button></div>
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
