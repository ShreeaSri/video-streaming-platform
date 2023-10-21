import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="pt-2 pl-6 w-48 col-span-1">
      <ul className="border-b">
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li className="pb-2">Live</li>
      </ul>
      <h1 className="font-bold pt-2">Subscription</h1>
      <ul className="border-b">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className="pb-2">Movies</li>
      </ul>
      <h1 className="font-bold pt-2">Watch Later</h1>
      <ul className="border-b">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className="pb-2">Movies</li>
      </ul>
      <h1 className="font-bold pt-2">Explore</h1>
      <ul className="border-b">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className="pb-2">Movies</li>
      </ul>
      <h1 className="font-bold pt-2">Library</h1>
      <ul className="border-b">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li className="pb-2">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
