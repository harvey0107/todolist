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

  handButtonClick(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
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
        <button onClick={this.handButtonClick.bind(this)}>Submit</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
                return <li key={index}>{item}</li>   
            })
          }
        </ul>
      </Fragment>
    )
  }
}
export default Todolist;
