import React, { Component } from "react";

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return (
        <div onClick={this.handClick}>
            {this.props.content}
            </div>)
    }

    handleClick(){
        this.props.onItemDelete(this.props.index)
    }
}

export default Todoitem;