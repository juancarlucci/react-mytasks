import React, { Component } from "react";
import { Button, Input, Popup, Icon } from "semantic-ui-react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      todo: ""
    };
  }
  onChange(event) {
    this.setState({
      todo: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    var todo = this.state.todo;
    this.props.onUpdateTodo(todo);
    this.setState({
      todo: "",
      editing: false
    });
  }

  render() {
    return (
      <div className="todoForm">
        <form onSubmit={this.onSubmit}>
          <Input
            autoFocus={this.props.autoFocus}
            onChange={this.onChange}
            type="text"
            value={this.state.todo || this.props.todo}
          />
          <Button
            className="btn-update"
            disabled={!this.state.todo}
            type="submit">
            {this.props.buttonName}
          </Button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
