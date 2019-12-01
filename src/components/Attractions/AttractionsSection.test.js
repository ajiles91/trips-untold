import React from 'react';
import ReactDOM from 'react-dom';
import AttractionsSection from './AttractionsSection';
import {BrowserRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <AttractionsSection />
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});