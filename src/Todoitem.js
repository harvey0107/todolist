import React, { Component } from "react";
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const {content} = this.props;
        return (
        <div onClick={this.handleClick}>
            {content}
            </div>)
    }

    handleClick(){
        this.props.delete(this.props.index)
    }
}

Todoitem.propTypes = {
    content: PropTypes.string,
    delete:PropTypes.func,
    index:PropTypes.number
}

export default Todoitem;