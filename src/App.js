
import './App.css';
import users from "./users";
import React, { Component } from 'react'

class App extends Component {
  
  state = {
    users: users,
    search: "",
    studentChecked: false,
    teacherChecked: false,
    campus: ""
  }

  
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    console.log(value);
    this.setState({
      [name]: value
    })
  }      

  render () {
    let regex = new RegExp(this.state.search, "gi")

    const filteredUsers = this.state.users.filter(user => {
      if (this.state.studentChecked) return user.role === "student";
      if (this.state.teacherChecked) return user.role === "teacher";
      if (this.state.search) return  `${user.firstName}${user.lastName}`.match(regex);
      if (this.state.campus) return user.campus === this.state.campus
      else return this.state.users
  })

  const mappedUsers = filteredUsers.map( user => (
    <tr >
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.campus}</td>
      <td>{user.role}</td>
      <td>{user.linkedin && <a href="{user.linkedin}">LinkedIn</a>}</td>
    </tr>
   ))

  return (
    <>
    <h1>IronBook</h1>
     <div class="input">
       <form action="" class="inputForm">
         <input 
            type="text"
            placeholder="type here..."
            name="search"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
         />
         <br/>
        <label htmlFor="">Student</label>
        <input
            type="checkbox"
            name="studentChecked"
            id="role"
            checked={this.state.studentChecked}
            onChange={this.handleChange}
          />
        <label htmlFor="">Teacher</label>
           <input
            type="checkbox"
            name="teacherChecked"
            id="role"
            checked={this.state.teacherChecked}
            onChange={this.handleChange}
          />
          <select name="campus" onChange={this.handleChange} value={this.state.campus}>
            <option value="">--Please choose an option--</option>
            <option value="Berlin">Berlin</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Paris">Paris</option>
          </select>
       </form> 
       <br/>
     </div>

      <div>
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
      </div>
    </>
  )
}
}

export default App;