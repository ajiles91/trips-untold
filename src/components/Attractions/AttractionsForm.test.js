import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsForm from './AttractionsForm';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <AttractionsForm />
  </BrowserRouter>
  
    , div);
  ReactDOM.unmountComponentAtNode(div);
});