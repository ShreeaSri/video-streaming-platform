import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/config";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetsions, setSuggetsions] = useState([]);
  const [showSuggetsions, setShowSuggetsions] = useState(false);

  useEffect(() => {
    console.log(searchQuery);
    //make an API call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    console.log(data[1]);
    setSuggetsions(data[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-1">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="hamburger-menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="relative col-span-10 px-10">
        <div className="text-center">
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetsions(true)}
            onBlur={() => setShowSuggetsions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {suggetsions.length > 0 && showSuggetsions && (
          <div className="absolute fixed bg-white ml-[270px] py-2 px-2 w-[37.5rem] rounded-xl shadow-lg border border-gray-300">
            <ul>
              {suggetsions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 cursor-pointer hover:bg-gray-100 rounded-lg "
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
