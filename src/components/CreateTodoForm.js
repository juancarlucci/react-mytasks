import React, {Component} from 'react';
import { Button, Icon, Input, Popup } from 'semantic-ui-react';


class CreateTodoForm extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      todo: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      todo: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let todo = this.state.todo
    //createTodo is a prop passed in by TodosContainer
    this.props.createTodo(todo)
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div className='createForm todoForm'>
        <form onSubmit={ this.onFormSubmit }>
          <Input
            onChange={ this.onInputChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <Button className="btn" circular disabled={!this.state.todo} type='submit'>+</Button>

        </form>
      </div>
    )
  }
}

export default CreateTodoForm
