import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsForm from './AttractionsForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AttractionsForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});