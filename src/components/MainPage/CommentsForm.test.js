import React from 'react';
import ReactDOM from 'react-dom';
import CommentsForm from './CommentsForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentsForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});