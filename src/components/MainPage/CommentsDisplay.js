import React, {Component} from 'react';
// import './CommentsDisplay.css'
import config from '../../config'
console.log('con', config.API_BASE_URL)
console.log('.env:', process.env.REACT_APP_API_BASE_URL)

export default class CommentsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  componentDidMount(){
    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      console.log('comments from backend:', json)
      this.setState({
        comments:json
      })
    })
  }

 
  render() {
    const infoMap = comments => (
      <div key={comments.id}>
        <p>{comments.comment}</p>
        <p>from {comments.username}</p>
      </div>
    )

    let comments = this.state.comments
    const commentsList = comments.map(comment =>infoMap(comment))
    return (
      <div className='comment'>
      
        {commentsList}
      </div>
    );
  }
}


