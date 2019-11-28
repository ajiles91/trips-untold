import React from 'react';
import ReactDOM from 'react-dom';
import WeatherSection from './WeatherSection';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});