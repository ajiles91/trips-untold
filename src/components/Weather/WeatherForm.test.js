import React from 'react';
import ReactDOM from 'react-dom';
import WeatherForm from './WeatherForm';
import {BrowserRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <WeatherForm />
  </BrowserRouter>
  
  
  , div);
  ReactDOM.unmountComponentAtNode(div);
});