import  React, {Component} from 'react';
import CommentsForm from './CommentsForm'
import { Link } from 'react-router-dom';
// import './MainPage.css'
import CommentsDisplay from './CommentsDisplay'

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
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

        <CommentsForm/>

        <CommentsDisplay />
          
        
      </div>
    );
  }
  
}

