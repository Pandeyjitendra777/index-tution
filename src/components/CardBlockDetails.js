import React from "react";

function CardBlockDetails(props) {
  return (
    <>
      <div className="card-block-details">
        <div className="card-details-header">
          <button className="back-button" onClick={props.cardClose}>
            Back
          </button>
          <h5>
            Country Dropdown <span>Stopwatch</span>{" "}
            <button className="pause-button">Pause/Start</button>
          </h5>
          <h4>Profile Page</h4>
          <div className="user-block">
            <div className="user-name-block">
              <p>Name</p>
              <p>UserName | Catch Phrase</p>
            </div>
            <div className="user-address-block">
              <p>Address</p>
              <p>Email | Phone</p>
            </div>
          </div>
          <div className="user-content-container">
            <div className="user-content-block">
              <p>Post Title</p>
              <p>Content</p>
            </div>
            <div className="user-content-block">
              <p>Post Title</p>
              <p>Content</p>
            </div>
            <div className="user-content-block">
              <p>Post Title</p>
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardBlockDetails;
