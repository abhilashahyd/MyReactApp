import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoLabel from './ToDoLabel';

class ToDoApp extends Component {

    constructor(props) {
        super(props);
        this.state= {items: [], text: '',name:'To Do Application'};
        // this.onChange.bind(this);
        // this.handleSubmit.bind(this);

    }

    onChange(e){
        console.log(e);
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    }

    render () {
        return (
        <div>
            <ToDoLabel name ={this.state.name}/>
            <ToDoList items={this.state.items} />
            <form onSubmit={event => this.handleSubmit(event)}>
                <input onChange={event => this.onChange(event)} value={this.state.text} />
                <button>{'Add #' + (this.state.items.length + 1)}</button>
            </form>
        </div>
        );
    }

  
}
  export default ToDoApp;
