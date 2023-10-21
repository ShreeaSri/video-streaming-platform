import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Programming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "History",
  "Economics",
  "Sadhguru",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll">
      <div className="flex ">
        {list.map((li) => (
          <Button key={li} name={li} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
