import React, { Component } from "react";

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return (
        <div onClick={this.handleClick}>
            {this.props.content}
            </div>)
    }

    handleClick(){
        this.props.delete(this.props.index)
    }
}

export default Todoitem;