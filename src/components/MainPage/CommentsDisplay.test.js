import React from 'react';
import ReactDOM from 'react-dom';
import CommentsDisplay from './CommentsDisplay';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentsDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});