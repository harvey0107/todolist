import React, { Component, Fragment  } from "react";

class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = {
      input:'',
      list:[]
    }
  }
  
  handleInputChange(event){
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
      <div>
        <input value={this.state.input} 
          onChange={this.handleInputChange.bind(this)}
          placeholder='Enter Your Event'
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
