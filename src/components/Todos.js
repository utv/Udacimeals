import React from 'react'
import { connect } from 'react-redux'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions/todos'

class Todos extends React.Component {
  handleTextKeyPress = e => {
    if (e.key === 'Enter' && this.textInput) {
      const id = new Date()
      const text = this.textInput.value
      this.props.addTodo({ text, id })
      this.textInput.value = ''
    }
  }

  handleToggle = todoId => {
    this.props.toggleTodo(todoId)
  }

  handleFilterClick = filter => {
    console.log(filter)
    this.props.setVisibilityFilter(filter)
  }

  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed)
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  render() {
    const { allTodos, visibilityFilter } = this.props.todos
    const visibleTodos = this.getVisibleTodos(allTodos, visibilityFilter)
    return (
      <div>
        <p>Todos App</p>
        <input
          ref={ele => this.textInput = ele}
          type='text'
          onKeyPress={this.handleTextKeyPress} />
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
                onClick={e => this.handleToggle(todo.id)}
              >
                {todo.text}
              </span>
            </li>
          )}
        </ul>
        <span>Show: </span>
        <ul style={{ display: 'inline' }}>
          {Object.values(VisibilityFilters).map(filter =>
            <li
              key={filter}
              style={{
                display: 'inline',
                marginLeft: '4px',
                fontWeight: filter === visibilityFilter ? 'bold' : 'normal'
              }}
              onClick={e => this.handleFilterClick(filter)}
            >
              {filter}
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
//   addTodo: todo => dispatch(addTodo(todo)),
//   toggleTodo: todoId => dispatch(toggleTodo(todoId))
// })

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, setVisibilityFilter }
)(Todos)