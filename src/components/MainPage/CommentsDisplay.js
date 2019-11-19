import React, {Component} from 'react';
// import './CommentsDisplay.css'

export default class CommentsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
  
  render() {
    return (
      <div className='comment'>
        <p>this is where the comments from database will go</p>
      </div>
    );
  }
}


