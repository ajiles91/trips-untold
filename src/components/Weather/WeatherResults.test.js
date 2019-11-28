import React from 'react';
import ReactDOM from 'react-dom';
import WeatherResults from './WeatherResults';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});