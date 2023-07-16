import React, { useState, Fragment } from "react";
// import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchFlatsHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/flats/${keyword}`);
    } else {
      navigate("/flats");
    }
  };

  const searchFlatmatesHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/flatmates/${keyword}`);
    } else {
      navigate("/flatmates");
    }
  };

  return (
    <Fragment>
      {/* <MetaData title="Search A Product -- ECOMMERCE" /> */}
      <form className="searchBox">
        <input
          type="text"
          placeholder="Enter keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input type="submit" value="Search in flats" onClick={searchFlatsHandler} />
        <input type="submit" value="Search in flatmates" onClick={searchFlatmatesHandler} />

      </form>
    </Fragment>
  );
};

export default Search;