import { React, useEffect, Fragment, useState} from 'react';
import "./FlatmateDetails.css";
import user from './user.png';
import ReactStars from 'react-stars'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { clearErrors, getFlatmateDetails } from '../../actions/flatmateActions';
import { addFlatmatesToCart } from '../../actions/cartActions';
import { useAlert } from "react-alert";
import Loader from '../layout/Loader/Loader';


const FlatmateDetails = () => {
  const { flatmate, loading, error } = useSelector((state) => state.flatmateDetails);
  const [reviewVisibility, setReviewVisibility] = useState({});
  const [rating, setRating] = useState(0);
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  const addToFlatmateCartHandler = () => {
    dispatch(addFlatmatesToCart(params.id));
    alert.success("Flatmate added");
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getFlatmateDetails(params.id))
  }, [dispatch, params.id])



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

  useEffect(() => {
    const fetchDataFromBackend = () => {
      const ratingFromBackend = 4.5;
      setRating(ratingFromBackend);
    };

    fetchDataFromBackend();
  }, []);

  return (
    <Fragment>
      {loading ? <Loader /> : (
        <div className="maincontainer">
        <div className="fd-container">
          <div className="fd-container30">
            <div className="image-container">
              <img src={user} alt="YourImage" />
              <div className="rating-button">
                <ReactStars
                  count={5}
                  size={24}
                  color2={'#ffd700'} 
                  value={rating}
                  edit={false} />
              </div>
              <div className="last-button">
              <button type="button" className="btn btn-success">Review</button>
              <button type="button" className="btn btn-info">Add as Flatmate</button>
            </div>
            </div>
          </div>
          <div className="fd-container70">
            <div className="intro">
              <h3>{flatmate.name}</h3>
              <h5 className="mx-2">Male</h5>
              <h6 className="mx-2">24</h6>
            </div>
            <div className="fd-button">
              <button type="button" className="btn btn-outline-success ">Message</button>
              <button type="button" className="btn btn-outline-danger">Report</button>
            </div>

            <div className="basic-info">
              <h4 className="my-3">Basic Details-</h4>
              <div className="accordion-container">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Education
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Occupation
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      City
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Gender Preference
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Hobbies
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Food Habits
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  edit={false}
                />
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
                  edit={false}
                />
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
                  color2={'#ffd700'}
                  value={rating}
                  edit={false}
                />
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
  )
}

export default FlatmateDetails