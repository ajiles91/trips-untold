import  React, {Component} from 'react';
import Comments from './Comments'
import { Link } from "react-router-dom";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
    }
  }
 

  
  render() {
    return (
      <div>
        <main>
          <header>
            <h1 className='app-title'>Trips Unknown</h1>
            <p> get restaurants, peculiar attractions and restaurants</p>
          </header>
            <Link to='/weather'>
                <button>to /weather</button>
            </Link>

            <Link to='/food'>
                <button>to /food</button>
            </Link>

            <Link to='/attractions'>
                <button>to /attractions</button>
            </Link>

            <Comments/>
          
        </main>
      </div>
    );
  }
}

