import React, {Component} from 'react';
import TodoForm from './TodoForm';
import {Button, Checkbox, Container, Grid, Column, List, Segment, Icon, Popup} from 'semantic-ui-react';


class Todo extends Component {
  constructor() {
    super();
    this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
    this.editClickedTodo = this.editClickedTodo.bind(this);
    // this.handleEditingDone = this.handleEditingDone.bind(this);
    // this.markAsComplete = this.markAsComplete.bind(this);

    this.state ={
      completed: false,
      editing: false
    };
  }

  deleteClickedTodo() {
    this.props.onDeleteTodo(this.props.todo);
  }

  editClickedTodo() {
    this.setState({ editing: true})
    this.props.onEditTodo(this.props.todo)
  }

  // handleEditingDone(e) {
  //   console.log("edit done");
  //   if(e.keyCode === 13){
  //     this.setState({ editing:false})
  //   }
  // }

  // markAsComplete(todoToBeMarkedCompleted) {
  //   var _completed = !this.state.completed;
  //   this.setState = ({
  //     completed: _completed
  //   });
  // }

  render(){
    console.log(this.state.editing);

    var viewStyle = {};
    var editStyle = {};
    //
    // if(this.state.editing){
    //   viewStyle.display = 'none';
    // } else {
    //   editStyle.display = 'none';
    // }

    console.log(this.state.editing);

    return(
     <List.Item data-todos-index={this.props.todo.id}>

       <List.Content
         labelposition='left'>

           {/*  <Checkbox className="check-mark" checked={this.props.todo.completed} onClick={this.markAsComplete}/>
         */}

         <Button className="btn btn-icon" circular icon='write' onClick={this.editClickedTodo}></Button>

          <Button className="btn btn-delete" circular onClick={this.deleteClickedTodo}>X</Button>

         <div className="todo-items-list">{this.props.todo.body}</div>




      </List.Content>
          { this.props.editingTodoId === this.props.todo._id ?
             <TodoForm
               autoFocus={true}
               onKeyUp={this.handleEditingDone}
               onUpdateTodo={this.props.onUpdateTodo}
               todo={this.props.todo.body}
               buttonName="Update Todo!"/> : '' }

      </List.Item>
    )
  }

}

export default Todo
