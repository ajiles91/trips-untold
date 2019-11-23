import  React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import WeatherSection from './components/Weather/WeatherSection'
import AttractionsSection from './components/Attractions/AttractionsSection'
import FoodSection from './components/Food/FoodSection'
import MainPage from './components/MainPage/MainPage'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
    }
  }
 
  render() {
    return (
      <div>
        <BrowserRouter>

          <Switch>
            <Route 
            path="/" exact 
            render={() => <MainPage />} 
            />

            <Route
              // path="/attractions/:query"
              path="/attractions"
              render={() => <AttractionsSection />}
              
            />

            <Route
              path="/weather"
              render={() => <WeatherSection />}
            />

            <Route
              // path="/restaurants/:query"
              path="/food"
              render={() => <FoodSection />}
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// "dest":"/static/myicon.ico"
