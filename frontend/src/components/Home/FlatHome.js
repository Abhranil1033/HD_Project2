import React, { useEffect } from 'react';
import { Fragment } from 'react';
import "./FlatHome.css"
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getFlats } from '../../actions/flatActions';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { Typography, Slider } from "@material-ui/core";
import Loader from "../layout/Loader/Loader.js";
import { useParams } from "react-router-dom";
// import { getFlatDetails } from '../../actions/flatActions';

const categories = ["X", "Y", "Z"];


const FlatHome = () => {

  const dispatch = useDispatch();
  const params = useParams();

  const { loading, error, flats, totalFlats, itemsInAPage } = useSelector((state) => state.flats);

  const [currentPage, setCurrentPage] = useState(1);
  const [rent, setRent] = useState([0, 125000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const [isFilterBoxVisible, setFilterBoxVisible] = useState(false);

  const toggleFilterBox = () => {
    setFilterBoxVisible(!isFilterBoxVisible);
  };

  const setCurrentPageNumber = (event, value) => {
    setCurrentPage(value);
    console.log(currentPage);
  }

  const rentHandler = (event, value) => {
    setRent(value);
  }

  const changeCategory = (event, value) => {
    setCategory(value);
    console.log(category);
  }

  const ratingsHandler = (event, value) => {
    setRatings(value);
    console.log(ratings);
  }

  // const viewFlatDetails = (flatId) => {
  //   // Dispatch the getFlatDetails action with the flatId parameter
  //   dispatch(getFlatDetails(flatId));
  // };

  const keyword = params.keyword;

  const paginationVisible = flats.length > 0;

  useEffect(() => {
    dispatch(getFlats(keyword, currentPage, rent, category, ratings));
  }, [dispatch, keyword, currentPage, rent, category, ratings]);

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div className='flatPage'>
          <section className='flatSection'>
            <button className='filterButton' onClick={toggleFilterBox}>Filters</button>

            {
              isFilterBoxVisible &&
              <div className="filterBox">
                <Typography>Price</Typography>
                <Slider
                  value={rent}
                  onChange={rentHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={25000}
                />

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

                <fieldset>
                  <Typography component="legend">Ratings Above</Typography>
                  <Slider
                    value={ratings}
                    onChange={ratingsHandler}
                    aria-labelledby="continuous-slider"
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                  />
                </fieldset>
              </div>
            }

            <div className="flat-container">
              <div className="cards">
                {flats &&
                  flats.map((flat, i) => (
                    <div key={i} className="card">
                      <h3>{flat.city}</h3>
                      <div className='card-image'>
                        {flat.images.length > 0 && (
                          <img src={flat.images[0].url} alt="flat" className='image' />
                        )}
                      </div>
                      <Link to={`/flat/${flat._id}`} className="flat-button">View</Link>
                    </div>
                  ))
                }
              </div>
            </div>
            {paginationVisible && (
              <Pagination
                count={Math.ceil(totalFlats / itemsInAPage)}
                size="large"
                page={currentPage}
                variant="outlined"
                shape="rounded"
                onChange={setCurrentPageNumber}
              />
            )}
            {/* <Pagination
            count={Math.ceil(totalFlats / itemsInAPage)}
            size="large"
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={setCurrentPageNumber}
          /> */}
          </section>
        </div>
      )}
    </Fragment>
  )
}

export default FlatHome;