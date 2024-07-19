import React, { FC } from "react";
import Comment from "../Comment";
import { CommentProps } from "../Comment/Comment";
import moment from "moment";

export interface PostProps {
  id: number;
  title_text: string;
  description: string;
  comments?: CommentProps[];
  created_at?: Date;
}

const Post: FC<PostProps> = ({
  id,
  title_text,
  description,
  comments,
  created_at,
}) => {
  const time = !!created_at
    ? moment(created_at).format("MMMM Do YYYY, h:mm a")
    : "";

  return (
    <>
      <article
        key={id}
        className="flex bg-gray-600 rounded-lg shadow-xl max-w-xl flex-col justify-between p-6"
      >
        <div className="max-w-md space-y-6 ">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={time} className="text-gray-900">
              {time}
            </time>
          </div>
          <div className="grid grid-rows-2 divide-y-[2px] ">
            <div className="group relative">
              <h3 className="text-xl font-semibold leading-6 text-white-900 group-hover:text-gray-800">
                  <span className="absolute inset-0 block font-sans text-xl font-semibold" />
                  {title_text}
              </h3>
              <p className="mt-2 block font-sans text-lg font-semibold line-clamp-3 text-sm leading-6 text-gray-400">
                {description}
              </p>
            </div>

            <div className="">
              <h1 className="mt-5 text-xl font-bold ">Comments</h1>
              {comments
                ? comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
