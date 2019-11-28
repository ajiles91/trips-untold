import React from 'react';
import ReactDOM from 'react-dom';
import FoodResults from './FoodResults';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoodResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});