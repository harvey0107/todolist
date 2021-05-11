import React, { Component, Fragment  } from "react";
import Todoitem from './Todoitem';

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
  //在組件被掛載到頁面之前自動執行（第一執行）
  componentWillMount(){ 
    console.log('componentWillMount');
  }
  
  handleInputChange(){
    const value = this.input.value;
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
    console.log('render');
    return (
      <Fragment>
      <div>
        <label htmlFor='insertPlace'>To Do List</label>
        <input 
          value={this.state.input} 
          id='insertPlace'
          onChange={this.handleInputChange}
          placeholder='Enter Your Event'
          ref={(input) => {this.input = input}}
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
  //在組件被掛載到頁面之後自動執行
  componentDidMount(){
    console.log('componentDidMount');
  }
  //在組建更新之前自動執行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true;
  }
  //在組建更新之前執行，但在shouldComponentUpdate後
  //shouldComponentUpdate返回true執行返回false不被執行
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  //在組建更新之後自動執行
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
}
export default Todolist;
