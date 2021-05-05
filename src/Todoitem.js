import React, { Component } from "react";

class Todoitem extends Component{
    render(){
        return <div onClick={this.handClick}>{this.props.content}</div>
    }

    handClick(){
        alert(this.props.index)
    }
}

export default Todoitem;