import React, {Component} from 'react';
import './CommentsForm.css'

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
  
  render() {
    return (
      <div className = 'whole-form'>
        <p>this is where the form for comments will go - linked to the backend</p>
        
      </div>
    );
  }
}

