import React from 'react'
import { Route, Link } from 'react-router-dom'
import App from './App'

const Entry = () => {
  return (
    <div>
      <ul>
        <li><Link to='/meals'>Meals</Link></li>
        <li><Link to='/todos'>Todos</Link></li>
      </ul>
      <Route path='/meals' render={() => <App />} />
    </div>
  )
}

export default Entry