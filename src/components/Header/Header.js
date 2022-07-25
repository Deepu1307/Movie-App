import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userImage from "../../images/user.png";
import "./Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchInput));
    dispatch(fetchAsyncShows(searchInput));
    setSearchInput("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={searchInput}
            placeholder="Search movies or shows"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>

      <div className="user-image">
        <img src={userImage} alt="user" />
      </div>
    </div>
  );
};

export default Header;
