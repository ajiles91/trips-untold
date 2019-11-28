import React from 'react';
import ReactDOM from 'react-dom';
import CommentSubmissionModal from './CommentSubmissionModal';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentSubmissionModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});