
import { React, useEffect, Fragment,useState} from 'react';
import './FlatDetails.css';
// import room from './room.jpg';
// import room2 from './room2.jpg';
import user from './user.png';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { clearErrors, getFlatDetails } from '../../actions/flatActions';
import { useAlert } from "react-alert";
import { addFlatsToCart } from '../../actions/cartActions';
import Loader from '../layout/Loader/Loader';
import { updateFlatCartTotal } from '../../actions/cartActions.js';



const FlatDetails = () => {
  const [rating, setRating] = useState(0);
  const [reviewVisibility, setReviewVisibility] = useState({});

  useEffect(() => {
    const fetchDataFromBackend = () => {
      const ratingFromBackend = 4.5;
      setRating(ratingFromBackend);
    };

    fetchDataFromBackend();
  }, []);

  const handleReadMoreClick = (person) => {
    setReviewVisibility((prevState) => ({
      ...prevState,
      [person]: !prevState[person]
    }));
  };

  const renderReviewText = (person) => {
    const isFullReviewVisible = reviewVisibility[person];
    if (isFullReviewVisible) {
      return (
        <p className="card-text">
          sbfjhfdbsafbjjglablsghow are youjshfksdbfljgbaljglgbdlb
        </p>
      );
    } else {
      return (
        <p className="card-text">
          sbfjhfdbsafbjjglablsg....
        </p>
      );
    }
  };
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { flat, loading, error } = useSelector((state) => state.flatDetails);
  const { flatCartItems } = useSelector((state) => state.flatCart);


  const addToCartHandler = () => {
    dispatch(addFlatsToCart(params.id));
    alert.success("Flat added to cart");
  }

  const calculateGrossTotal = () => {
    return flatCartItems.reduce((acc, item) => acc + item.price, 0);
  };

  useEffect(() => {
    const grossTotal = calculateGrossTotal();
    dispatch(updateFlatCartTotal(grossTotal));
  }, [dispatch, flatCartItems]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFlatDetails(params.id))
  }, [dispatch, params.id, error, alert])


  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div className="maindiv">
          <div className="fds-container">
            <div className="fds-container20">
              <div className="card2">
                <h3>{flat.city}</h3>
                <div className="special2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nihil, minima in voluptatem dolorum natus ad, porro.</p>
                  <h6>room details</h6><hr />
                  <h6>room details</h6><hr />
                  <h6>room details</h6><hr />
                  <h2>{flat.rent}</h2>
                </div>
                <div className="fav-button">
                  <Link type="button" className="btn btn-warning">Add to Favourites</Link>
                  <Link type="button" className="btn btn-warning" onClick={addToCartHandler}>Prebook Room</Link>
                </div>
              </div>
            </div>
            <div className="fds-container60">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active" >
                    <img src={user} className="d-block w-100 img-fluid" alt="..." style={{ width: '300px', height: '400px' }} />
                  </div>
                  <div className="carousel-item">
                    <img src={user} className="d-block w-100 img-fluid" alt="..." style={{ width: '300px', height: '400px' }} />
                  </div>
                  <div className="carousel-item">
                    <img src={user} className="d-block w-100 img-fluid" alt="..." style={{ width: '300px', height: '400px' }} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden ">Next</span>
                </button>
                <div className="rating-button">
                  <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'}
                    value={rating}
                    edit={false}  />
                </div>
              </div>
            </div>
            <div className="fds-container201">
              <div className="card2">
                <h4>Location</h4>
              </div>
            </div>
          </div>
          <div className="fds-review">
            <h3>Reviews<hr /></h3>
            <div className="reviewbar">
              <div className="card bg-body-secondary " >
                <div className="card-body">
                  <h5 className="card-title">person-1</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">address</h6>
                  <div className="rating-button2">
                    <ReactStars
                      count={5}
                      size={24}
                      color2={'#ffd700'} 
                      value={rating}
                     edit={false} />
                  </div>
                  <div className="read-more">
                  {renderReviewText('person-1')}
                <button
                  className="read-more-button"
                  onClick={() => handleReadMoreClick('person-1')}
                >
                  {reviewVisibility['person-1'] ? 'Show Less' : 'Read More'}
                </button>
                  </div>
                </div>
              </div>
              <div className="card bg-body-secondary" >
                <div className="card-body">
                  <h5 className="card-title">person-2</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">address</h6>
                  <div className="rating-button2">
                    <ReactStars
                      count={5}
                      size={24}
                      color2={'#ffd700'}
                      value={rating}
                    edit={false}  />
                  </div>
                  <div className="read-more">
                  {renderReviewText('person-2')}
                <button
                  className="read-more-button"
                  onClick={() => handleReadMoreClick('person-2')}
                >
                  {reviewVisibility['person-2'] ? 'Show Less' : 'Read More'}
                </button>
                  </div>
                </div>
              </div>
              <div className="card bg-body-secondary" >
                <div className="card-body">
                  <h5 className="card-title">person-3</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">address</h6>
                  <div className="rating-button2">
                    <ReactStars
                      count={5}
                      size={24}
                      color2={'#ffd700'} value={rating}
                      edit={false} />
                  </div>
                  <div className="read-more">
                  {renderReviewText('person-3')}
                <button
                  className="read-more-button"
                  onClick={() => handleReadMoreClick('person-3')}
                >
                  {reviewVisibility['person-3'] ? 'Show Less' : 'Read More'}
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>

  );
};

export default FlatDetails;
