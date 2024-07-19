import React, { FC } from "react";

export interface CommentProps {
  text: string;
  created_at?: Date;
}

const Comment: FC<CommentProps> = ({ text, created_at }) => {
  return (
    <>
      <p className="text-xl ">- {text}</p>
    </>
  );
};

export default Comment;
