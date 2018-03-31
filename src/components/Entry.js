import React from 'react'
import { Route, Link } from 'react-router-dom'
import Meals from './Meals'
import Todos from './Todos'

const Entry = () => {
  return (
    <div>
      <ul>
        <li><Link to='/meals'>Meals</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
      </ul>
      <Route path='/meals' render={() => <Meals />} />
      <Route path='/todos' render={() => <Todos />} />
    </div>
  )
}

export default Entry