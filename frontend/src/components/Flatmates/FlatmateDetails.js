import React, { useState } from 'react';
import "./FlatDetails.css"

const FlatmateDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [flatmatedet]=useState([
    {
      name:"Person-1",
      gender:"Male",
      age:23,
      occupation:""
    }])
  return (
    <div className="container flatmate-pro">
      <form method="">
        <div className="row">
          <div className="col-md-6">
            <img src="../user&flat/user.png" alt="images" style={{ height: "350px" }} />
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h4>Name</h4>
              <h5>Gender</h5>
              <h5>Age</h5>
              <h6>Job Role</h6>
              <br />
              <br />
              <p>Brief Description:Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo corporis quidem esse magnam harum! Praesentium veritatis fuga doloribus sit optio, nemo ad a fugiat voluptatibus vel voluptates minus! Rem.</p>
              <div className="profile-button my-2">
                <button type="button" className="btn btn-success my-4">Send Chat</button>
                <button type="button" className="btn btn-danger mx-4 my-4">Report User</button>
              </div>
              <ul className="nav nav-tabs my-3">
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                    id="home-tab"
                    onClick={() => handleTabClick('about')}
                  > About Me</a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                    id="profile-tab"
                    onClick={() => handleTabClick('overview')}
                  >Overview</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {/* left side url */}
          <div className="col-md-6">
            <div className="profile-work">
              <h5>Contact Me:</h5><br/>
              <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_dish">Email</a><br />
              <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_dish">Facebook</a><br />
              <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_dish">Instagram</a><br />
              <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_dish">GitHub</a><br />
              <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU" target="_dish">LinkedIn</a><br />
            </div>
          </div>
          {/* right side  */}
          <div className="col-md-6 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-4">
                    <label> User ID</label>
                  </div>
                  <div className="col-md-4">
                    <label>ID</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Name</label>
                  </div>
                  <div className="col-md-4">
                    <label>name</label>
                  </div>
                </div>
                <div className="row mt-3 my-3">
                  <div className="col-md-4">
                    <label>Gender</label>
                  </div>
                  <div className="col-md-4">
                    <label>gender</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Age</label>
                  </div>
                  <div className="col-md-4">
                    <label>age</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Education</label>
                  </div>
                  <div className="col-md-4">
                    <label>-</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Occupation</label>
                  </div>
                  <div className="col-md-4">
                    <label>occupation</label>
                  </div>
                </div>
              </div>
              {/* overview */}
              <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`} id="overview" role="tabpanel" aria-labelledby="overview-tab">
                <div className="row">
                  <div className="col-md-4">
                    <label>Budget</label>
                  </div>
                  <div className="col-md-4">
                    <label>budget</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Gender Preferences</label>
                  </div>
                  <div className="col-md-4">
                    <label>Doesn't Matter</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Current City</label>
                  </div>
                  <div className="col-md-4">
                    <label>-</label>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <label>Moving To</label>
                  </div>
                  <div className="col-md-4">
                    <label>-</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FlatmateDetails
