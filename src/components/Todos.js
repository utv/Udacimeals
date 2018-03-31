import React from 'react'
import { connect } from 'react-redux'

class Todos extends React.Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <p>Todos App</p>
        <ul>
          {todos && todos.map(todo =>
            <li key={todo.id}>{todo.text}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.todos
}

export default connect(mapStateToProps)(Todos)