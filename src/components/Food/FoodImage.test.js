import React from 'react';
import ReactDOM from 'react-dom';
import FoodImage from './FoodImage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoodImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});