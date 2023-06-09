import React from "react";

import {data} from './data'
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container portfolio_sec">
      {data.slice(0,3).map((val) => {
        
          return (
            <div className="row my-5" key={val.id}>
              <div className="col-md-6 col-12 d-flex flex-column justify-content-center ">
        <p className="title">{val.title} </p>
      <h2 className="head">{val.head}</h2>
      <p className="para">
        {val.para}
      </p>
      <div className="d-flex align-items-center">
      <BsArrowRight color="#fecd1a" size={25}/>
      <a href="#" className="mx-4">Read More</a>
      </div>
        </div>
        <div className="col-md-6 col-12">
          <img data-aos="flip-left" className="img-fluid" style={{borderRadius: '45px'}} src={val.image} alt="" />
        </div>
            </div>
          )
        })}
        <div className="d-flex justify-content-center view_btn mb-3">
          <Link to="/portfolio" >View All</Link> 
        </div>
    </div>
  );
};

export default Portfolio;
