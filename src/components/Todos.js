import React, { Component } from "react";
import Todo from "./Todo";
import { Grid, Message, Icon, Segment, List, Label } from "semantic-ui-react";

class Todos extends Component {
  render() {
    let todos = this.props.todos.map(todo => {
      return (
        <Todo
          key={todo._id}
          todo={todo}
          editingTodoId={this.props.editingTodoId}
          onEditTodo={this.props.onEditTodo}
          onDeleteTodo={this.props.onDeleteTodo}
          onUpdateTodo={this.props.onUpdateTodo}
          markAsComplete={this.props.markAsComplete}
        />
      );
    });
    var reversedTodos = todos.reverse();

    return (
      <Grid className="todos" container columns={1} stackable>
        <List divided relaxed>
          {todos}
        </List>

        <Grid.Column>
          <Icon name="tasks" circular />total todos: {todos.length}
        </Grid.Column>
      </Grid>
    );
  }
}

export default Todos;
