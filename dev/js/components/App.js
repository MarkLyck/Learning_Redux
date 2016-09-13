import React from 'react'
require('../../scss/style.scss')
import UserList from '../containers/UserList'
import UserDetail from '../containers/UserDetail'

const App = () => (
  <div>
    <h2>Username list:</h2>
    <UserList/>
    <hr/>
    <h2>User Details:</h2>
    <UserDetail/>
  </div>
)

export default App
