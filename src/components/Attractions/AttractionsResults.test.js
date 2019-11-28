import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsResults from './AttractionsResults';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttractionsResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});