import React, { Component, Fragment  } from "react";
import Todoitem from './Todoitem';

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

  onItemDelete(index){
    const listCopy = [...this.state.list];
    listCopy.splice(index, 1, )
    this.setState({ 
      list: listCopy
    })
  }

  render() {
    return (
      <Fragment>
      <div>
        <label htmlFor='insertPlace'>To Do List</label>
        <input value={this.state.input} 
          id='insertPlace'
          onChange={this.handleInputChange.bind(this)}
          placeholder='Enter Your Event'
        />
        <button onClick={this.handButtonClick.bind(this)}>Submit</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
                return (
                  <div>
                  <Todoitem 
                  delete = {this.onItemDelete.bind(this)} 
                  index = {index} 
                  content = {item}/>
                  {/*<li 
                  key={index}
                  dangerouslySetInnerHTML = {{__html:item}} 
                  onClick={this.onItemDelete.bind(this)}>
                  </li>*/}
                    </div>)   
            })
          }
        </ul>
      </Fragment>
    )
  }
}
export default Todolist;
