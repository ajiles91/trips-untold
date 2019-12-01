import React from 'react';
import ReactDOM from 'react-dom';
import WeatherSection from './WeatherSection';
import {BrowserRouter} from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <WeatherSection />
  </BrowserRouter>
  
  
  , div);
  ReactDOM.unmountComponentAtNode(div);
});