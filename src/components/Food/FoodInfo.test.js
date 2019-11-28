import React from 'react';
import ReactDOM from 'react-dom';
import FoodInfo from './FoodInfo';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoodInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});