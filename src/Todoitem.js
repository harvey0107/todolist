import React, { Component } from "react";
import PropTypes from 'prop-types';

class Todoitem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const {content, note} = this.props;
        return (
        <div onClick={this.handleClick}>
            {note} - {content}
            </div>)
    }

    handleClick(){
        this.props.delete(this.props.index)
    }
}

Todoitem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    delete:PropTypes.func,
    index:PropTypes.number,
    note:PropTypes.string.isRequired
}

Todoitem.defaultProps = {
    note: 'Note'
}

export default Todoitem;