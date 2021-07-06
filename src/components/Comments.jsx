import React from "react";

const Comments = (props) => {
  return (
    <div>
      {props.dish.comments.map((comment) => (
        <div>{comment.comment}</div>
      ))}
    </div>
  );
};

export default Comments;
