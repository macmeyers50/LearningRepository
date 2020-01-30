import React, { Component } from 'react';
class MyForm extends Component {
    render() {
      return(
          
    <form action="/index.html" method="POST">
        <label for="username">Username:  </label>
        <input type="text" name="username" value="Davie"/>
        <label for="user-pw">Password:</label>
        <input type="password" name="user-pw" id="user-pw"/>
    </form>
      )
    }
  }

  export default MyForm;