import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class Todos extends React.Component {
  handleTextKeyPress = e => {
    if (e.key === 'Enter' && this.textInput) {
      console.log(e.key)
      const id = new Date()
      const text = this.textInput.value
      this.props.addTodo(id, text)
      this.textInput.value = ''
    }
  }

  handleToggle = todoId => {
    // this.props.toggleTodo(todoId)
  }

  render() {
    const { todos } = this.props
    console.log(todos)
    return (
      <div>
        <p>Todos App</p>
        <input
          ref={ele => this.textInput = ele}
          type='text'
          onKeyPress={this.handleTextKeyPress} />
        <ul>
          {todos.allTodos && todos.allTodos.map(todo =>
            <li
              key={todo.id}
            // style={{
            //   textDecoration: todo.completed ? "line-through" : "none"
            // }}
            // onClick={e => this.handleToggle(todo.id)}
            >
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

// const mapDispatchToProps = dispatch => ({
//   addTodo
//   // toggleTodo
// })

export default connect(
  mapStateToProps,
  { addTodo }
)(Todos)