import React, { Component, Fragment  } from "react";
import Todoitem from './Todoitem';
import axios from 'axios'

class Todolist extends Component{
  constructor(props){
    super(props);
    this.state = {
      input:'',
      list:[]
    }
    this.handButtonClick = this.handButtonClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onItemDelete = this.onItemDelete.bind(this)
  }
 
  
  handleInputChange(event){
    const value = event.target.value;
    this.setState(() => ({
      input: value
    }));
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
        <input 
          value={this.state.input} 
          id='insertPlace'
          onChange={this.handleInputChange}
          placeholder='Enter Your Event'
        />
        <button onClick={this.handButtonClick}>Submit</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
                return (
                  <Todoitem
                  key = {index}
                  delete = {this.onItemDelete} 
                  index = {index} 
                  content = {item}/>
                  )  
            })
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount(){
    axios.get('/api/todolist')
    .then(()=>{alert('succ')})
    .catch(()=>{alert('error')})
  }
}
export default Todolist;
