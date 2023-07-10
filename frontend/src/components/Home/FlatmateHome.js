import React, { useEffect } from 'react';
import "./FlatmateHome.css"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFlatmates } from '../../actions/flatmateActions';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { Typography, Slider } from "@material-ui/core";

const categories = ["X", "Y", "Z"];

const FlatmateHome = () => {

  const dispatch = useDispatch();
  const { loading, error, flatmates, totalFlatmates, itemsInAPage } = useSelector((state) => state.flatmates)

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [isFilterBoxVisible, setFilterBoxVisible] = useState(false);

  const toggleFilterBox = () => {
    setFilterBoxVisible(!isFilterBoxVisible);
  };

  const setCurrentPageNumber = (event, value) => {
    setCurrentPage(value);
    console.log(currentPage);
    // navigate(`?page=${currentPage}`);
  }

  const changeCategory = (event, value) => {
    setCategory(value);
    console.log(category);
  }

  const paginationVisible = flatmates.length > 0;


  useEffect(() => {
    dispatch(getFlatmates(currentPage, category));
  }, [dispatch, currentPage, category]);

  return (
    <div className='flatmatePage'>
      <section>
        <button className='filterButton' onClick={toggleFilterBox}>Filters</button>
        {isFilterBoxVisible &&
          <div className="filterBox">

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li className="category-link"
                  key={category}
                  onClick={changeCategory}
                >
                  {category}
                </li>
              ))}
            </ul>

          </div>
        }


        <div className="flatmate-container">
          <div className="cards">
            {
              flatmates.map((flatmate, i) => (
                <div key={i} className="card">
                  <img src={flatmate.images} alt="images" className="images"/>
                  <h3>{flatmate.name}</h3>
                  <div className="special">
                    <h6>{flatmate.proffession} | </h6>
                    <h6>Gender | </h6>
                    <h6> 22</h6>
                    {/* <h6>{cards.gender}</h6>|
                    <h6>{cards.age}</h6> */}
                  </div>
                  <Link to={flatmate._id} className="flatmate-button">Find out more</Link>
                </div>
              ))
            }
          </div>
        </div>
        {paginationVisible && (
          <Pagination
            count={Math.ceil(totalFlatmates / itemsInAPage)}
            size="large"
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={setCurrentPageNumber}
          />
        )}
      </section>
    </div>
  )
}

export default FlatmateHome