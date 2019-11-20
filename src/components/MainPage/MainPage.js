import  React, {Component} from 'react';
import CommentsForm from './CommentsForm'
import { Link } from 'react-router-dom';
// import './MainPage.css'
import CommentsDisplay from './CommentsDisplay'
import config from '../../config'
import CommentsContext from './CommentsContext';

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
      console.log('comments from backend:', json)
      this.setState({
        comments:json
      })
    })
  }

  updateCommentsonMainPage = () =>{
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
    return (
      <div className='whole-page'>
        
        <header className='row-1 greeting'>
          <h1 className='app-title'>Trips Unknown</h1>
          <p> get restaurants, peculiar attractions and restaurants</p>
        </header>

        <div className = 'row-2'>
          <Link to='/weather'>
            <button className='flex-item'>to /weather</button>
          </Link>

          <Link to='/food'>
            <button className='flex-item'>to /food</button>
          </Link>

          <Link to='/attractions'>
            <button className='flex-item'>to /attractions</button>
          </Link>
        </div>

        <CommentsContext.Provider value ={{comments:this.state.comments}}>
          <CommentsForm updateCommentsonMainPage={this.updateCommentsonMainPage}/>
          <CommentsDisplay updateCommentsonMainPage={this.updateCommentsonMainPage}/>
        </CommentsContext.Provider>
          
            
        
      </div>
    );
  }
  
}

