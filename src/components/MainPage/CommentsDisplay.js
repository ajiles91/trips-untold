import React from "react";
import "./CommentsDisplay.css";
// import config from '../../config'
import CommentsContext from "./CommentsContext";

const CommentsDisplay = () => {
  const commentsCtx = React.useContext(CommentsContext);

  const infoMap = comments => (
    <div className="comment-indiv" key={comments.id}>
      <p>{comments.comment}</p>
      <p>from {comments.username}</p>
    </div>
  );

  const commentsList = commentsCtx.comments
    ? commentsCtx.comments.map(comment => infoMap(comment))
    : [];

  return (
    <div className="comment">
      <div className="grid">{commentsList}</div>
    </div>
  );
};

export default CommentsDisplay;

