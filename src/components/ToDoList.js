import React, { Component } from 'react';


// const ToDoList = props => {
//     const createItem = function(itemText) {
//             return <li>{itemText}</li>;
//         };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }

class ToDoList extends Component {

    constructor(props) {
        super(props);
      
    }

    createItem(itemText) {
            return <li>{itemText}</li>;
        };
//     
render(){
    return (<ul>{this.props.items.map((x) => {return this.createItem(x) })} </ul>);
  }

}
export default ToDoList;