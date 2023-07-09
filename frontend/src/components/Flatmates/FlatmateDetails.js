import React from 'react';
import "./FlatmateDetails.css";
import user from './user.png';
// import { useSelector,useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { clearErrors,getFlatmateDetails } from '../../actions/flatmateActions';


const FlatmateDetails = () => {
  // const { flatmate,loading,error } = useSelector((state) => state.flatmateDetails);
  // const params = useParams();
  // const dispatch = useDispatch();

  // const [activeTab, setActiveTab] = useState('about');
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  // const [flatmatedet] = useState([
  //   {
  //     name: "Person-1",
  //     gender: "Male",
  //     age: 23,
  //     occupation: ""
  //   }]);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getFlatmateDetails(params.id))
  // }, [dispatch, params.id ])

  return (
   <div className="fd-container">
    <div className="fd-container30">
       <div className="image-container">
         <img src={user} alt="YourImage"/>
       </div>
    </div>
    <div className="fd-container70">
       <div className="intro">
         <h3>Radhika Merchant</h3>|
         <h6 className="mx-2">female</h6>|
         <h6 className="mx-2">24</h6>
       </div>
       <div className="basic-info">
         <h4 className="my-3">Basic Details-</h4>
         <h6>Education:</h6>
         <h6>Occupation:</h6>
         <h6>Current City:</h6>
         <h6>Gender Preference:</h6>
         <h6>Moving to City:</h6>
       </div>
       <div className="fd-button">
        <button type="button" class="btn btn-success ">Message</button>
        <button type="button" class="btn btn-danger">Report</button>
       </div>
    </div>
   </div>
  )
}

export default FlatmateDetails
