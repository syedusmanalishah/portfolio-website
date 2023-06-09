import React from "react";

const Cards = () => {
  return (
    <>
      <div className="container card_sec">
        <div className="row">
          <div className="card-section col-md-3 col-12" style={{padding: '0px'}}>
            <div className="card_bg1 card-sectionr">
              <h2>56</h2>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="card-section col-md-3 col-12" >
            <div className="card_bg card-sectionr">
              <h2>87</h2>
              <p>Projects Done</p>
            </div>
          </div>
          <div className="card-section col-md-3 col-12" style={{padding: '0px'}}>
            <div className="card_bg card-sectionr">
              <h2>16</h2>
              <p>Awards Winning</p>
            </div>
          </div>
          <div className="card-section col-md-3 col-12">
            <div className="card_bg2 card-sectionr">
              <h2>7</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
