import React, {Component} from 'react';



export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
 

  
  render() {
    return (
      <div>
        <p>this is where the form for comments will go</p>
        <p>this is where the comments from database will go</p>
      </div>
    );
  }
}

