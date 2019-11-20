import React, {Component} from 'react';
// import './CommentsForm.css'
import config from '../../config'

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      comment:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('comment going in:',this.state.comment)
    console.log('name going in:',this.state.username)
    fetch(`${config.API_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        comment: this.state.comment
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(()=>this.props.updateCommentsonMainPage())
  }


  render() {
    return (
      <div className = 'whole-form'>
        <form className="submit-idea" onSubmit={this.handleSubmit}>
          <legend>
            Leave a comment here! Tell users about a restaurant or attraction they should check out!
          </legend>
          
            <div>
              <label htmlFor="user-name">Name</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                required
              />
            </div>

            <div>
              <label htmlFor="comments">Comment and/or Recommendation</label>
              <textarea
                value={this.state.comment}
                rows="15"
                cols="43"
                onChange={this.handleChange}
                name="comment"
                required
              />
            </div>              

            <div className='button-wrapper'>
              <button type="submit">Submit</button>
            </div>
              
          </form>
      </div>
    );
  }
}

