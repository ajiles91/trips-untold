import React, {Component} from 'react';
import './CommentsForm.css'
import config from '../../config'
import CommentSubmissionModal from './CommentSubmissionModal'

export default class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      comment:'',
      showModal: false
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
    .then(() =>{
      this.setState({
        showModal: true
      })
    })
  }


  render() {
    const { showModal } = this.state;

    return (
      <div className = 'whole-form'>
        <CommentSubmissionModal 
          show={showModal}
          text={'Your comment has been submitted!'}
          onClose={(event) => {
            if (event.target.className !== "modal-content") {
              this.setState({
                showModal: false
              })
            }
          }}
        />
      
        <form className="submit-idea" onSubmit={this.handleSubmit}>
          <legend className='paragraph'>
            Leave a comment here! Tell users about a restaurant or attraction they should check out!
          </legend>

            <div>
              
              <input className='comment-inputs'
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                placeholder="Type Name Here"
                required
              />
            </div>

            <div>
              
              <textarea className='comment-inputs'
                value={this.state.comment}
                rows="15"
                cols="43"
                onChange={this.handleChange}
                placeholder=" Type Recommendation or Comment Here"
                name="comment"
                required
              />
            </div>              

            <div className='button-wrapper'>
              <button className='comment-submit' type="submit">Submit</button>
            </div>
              
          </form>
      </div>
    );
  }
}

