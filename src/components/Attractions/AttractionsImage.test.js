import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsImage from './AttractionsImage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttractionsImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});