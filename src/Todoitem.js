import React, { Component } from "react";

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handClick = this.handClick.bind(this);
    }
    render(){
        return (
        <div onClick={this.handClick}>
            {this.props.content}
            </div>)
    }

    handClick(){
        alert(this.props.index);
    }
}

export default Todoitem;