import React, { Component } from "react";
import "./CommentSubmissionModal.css";

class CommentSubmissionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showModal, onClose, text } = this.props;
    
    if (!showModal) return null;

    return (
      <div onClick={onClose} className="modal">
        <div className="modal-content">
          <p>Your comment has been submitted!</p>
          <button className="close" onClick={onClose}>X</button>
        </div>
      </div>
    );
  }
}

export default CommentSubmissionModal;