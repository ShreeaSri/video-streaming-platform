import React from "react";

const commentdata = [
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [
      {
        name: "Shreea Sri",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [],
      },
      {
        name: "Shreea Sri",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [],
      },
      {
        name: "Shreea Sri",
        text: "Lorem ipsum dolor sit amet, consectrur adip",
        replies: [
          {
            name: "Shreea Sri",
            text: "Lorem ipsum dolor sit amet, consectrur adip",
            replies: [
              {
                name: "Shreea Sri",
                text: "Lorem ipsum dolor sit amet, consectrur adip",
                replies: [
                  {
                    name: "Shreea Sri",
                    text: "Lorem ipsum dolor sit amet, consectrur adip",
                    replies: [],
                  },
                  {
                    name: "Shreea Sri",
                    text: "Lorem ipsum dolor sit amet, consectrur adip",
                    replies: [
                      {
                        name: "Shreea Sri",
                        text: "Lorem ipsum dolor sit amet, consectrur adip",
                        replies: [
                          {
                            name: "Shreea Sri",
                            text: "Lorem ipsum dolor sit amet, consectrur adip",
                            replies: [
                              {
                                name: "Shreea Sri",
                                text: "Lorem ipsum dolor sit amet, consectrur adip",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
  {
    name: "Shreea Sri",
    text: "Lorem ipsum dolor sit amet, consectrur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className=" flex p-3 rounded-sm bg-gray-100 my-2 shadow-sm">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border border-l-black ml-7 pl-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className=" ml-5 w-[1200px]">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentdata} />
    </div>
  );
};

export default CommentContainer;
