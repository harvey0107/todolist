import Reac, { Component } from "react";

class Todoitem extends Component{
    render(){
        return <div>{this.props.content}</div>
    }
}

export default Todoitem;