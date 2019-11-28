import React from 'react';
import ReactDOM from 'react-dom';
import WeatherForm from './WeatherForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});