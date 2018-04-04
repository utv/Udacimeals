// actioin types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants
export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_COMPLETED: 'Completed',
  SHOW_ACTIVE: 'Active'
}

// action creators
export const addTodo = ({ id, text }) => ({
  type: ADD_TODO,
  id: id,
  text: text,
  completed: false
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter: filter
})