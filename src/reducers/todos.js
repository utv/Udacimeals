import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/todos'
import { combineReducers } from 'redux'

const allTodos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('ADD_TODO')
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id)
          return {
            ...todo,
            completed: !todo.completed
          }
        return todo
      })
    default:
      return state
  }
}

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// export function todos(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     allTodos: allTodos(state.allTodos, action)
//   }
// }

export const todos = combineReducers({
  allTodos, visibilityFilter
})