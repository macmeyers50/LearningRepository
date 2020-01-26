import React, { Component } from 'react';
import './Button.css'
class Button extends Component {
    render() {
      return(
          
       <button 
          className="button"
          type="button">
              <span>Click Me</span></button>
      )
    }
  }
  class Button2 extends Component {
    render() {
      return(
          
       <button 
          className="button2"
          type="button">
              <span>Click Me</span></button>
      )
    }
  }
  class Button3 extends Component {
    render() {
      return(
          
       <button 
          className="button3"
          type="button">
              <span>Click Me</span></button>
      )
    }
  }
  export default Button;
  export {Button, Button2, Button3};