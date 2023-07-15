import React, { useState, Fragment } from "react";
// import MetaData from "../layout/MetaData";
import {useNavigate} from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/flats/${keyword}`);
    } else {
      navigate("/flats");
    }
  };

  return (
    <Fragment>
      {/* <MetaData title="Search A Product -- ECOMMERCE" /> */}
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Enter keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;