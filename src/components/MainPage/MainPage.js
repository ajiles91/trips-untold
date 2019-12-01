import  React, {Component} from 'react';
import CommentsForm from './CommentsForm'
import { Link } from 'react-router-dom';
import './MainPage.css'
import CommentsDisplay from './CommentsDisplay'
import config from '../../config'
import CommentsContext from './CommentsContext';
import CommentSubmissionModal from './CommentSubmissionModal';

export default class MainPage extends Component {
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
      this.setState({
        comments:json
      })
    })
  }

  updateCommentsonMainPage = () =>{
    fetch(`${config.API_BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        comments:json
      })
    })
  }

  
  render() {
    return (
      <div className='whole-page'>
        
        <header className='row-1 greeting'>
          <h1 className='app-title'>Trips Unplanned</h1>
          <p> get restaurants, attractions and restaurants for your next trip</p>
        </header>

        <div className = 'row-2'>
          
          
          <Link to='/weather'>
              <button className='flex-item'>Go To Weather</button>
            </Link>

            <Link to='/food'>
              <button className='flex-item'>Go To Food</button>
            </Link>

            <Link to='/attractions'>
              <button className='flex-item'>Go To Attractions</button>
            </Link>
          
            
      
         
        </div>
        <CommentSubmissionModal />

        <CommentsContext.Provider value ={{comments:this.state.comments}}>
          <CommentsForm updateCommentsonMainPage={this.updateCommentsonMainPage}/>
          <CommentsDisplay updateCommentsonMainPage={this.updateCommentsonMainPage}/>
        </CommentsContext.Provider>
          
      </div>
    );
  }
  
}

