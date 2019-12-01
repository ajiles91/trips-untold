import React from 'react';
import ReactDOM from 'react-dom';
import FoodSection from './FoodSection';
import {BrowserRouter} from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <FoodSection />
  </BrowserRouter>
  
    
    
    , div);
  ReactDOM.unmountComponentAtNode(div);
});