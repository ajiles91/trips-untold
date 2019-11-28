import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsInfo from './AttractionsInfo';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttractionsInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});