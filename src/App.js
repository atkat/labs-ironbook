import logo from './logo.svg';
import './App.css';
import users from "./users";
import React, { Component } from 'react'


class App extends Component {

render () {
  state = {
    users: users
  }

  const mappedUsers = this.state.users.map( user => (
    <tr key={user.firstName}>
      <td>{user.lastName}</td>
      <td>{user.popularity}</td>
      <td><button onClick={() => this.removeuser(user.id)}>Remove user</button></td>
    </tr>
   ))

  return (
    <>
      <button onClick={this.addRandomuser}>Add new user</button>
      <button onClick={this.sortAlphabetically}>Sort alphabetically</button>
      <button onClick={this.sortPopularity}>Sort by popularity</button>
      <table>
        <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Campus</td>
              <td>Role</td>
              <td>Links</td>
            </tr>
        </thead>
        <tbody>
          {mappedUsers}
        </tbody>
      </table>
    </>
  )
}
}

export default App;