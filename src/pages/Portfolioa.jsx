import React from 'react'
import {data} from '../components/Elements/data'
import { BsArrowRight } from "react-icons/bs";
const Portfolioa = () => {
  return (
    <div>
  <div className="container portfolio_sec">
      {data.map((val) => {
          return (
            <div className="row my-5" key={val.id}>
              <div data-aos="fade-up" className="col-md-6 col-12 d-flex flex-column justify-content-center ">
        <p className="title">{val.title} </p>
      <h2  className="head">{val.head}</h2>
      <p  className="para">
        {val.para}
      </p>
      <div className="d-flex align-items-center">
      <BsArrowRight color="#fecd1a" size={25}/>
      <a href="#" className="mx-4">Read More</a>
      </div>
        </div>
        <div className="col-md-6 col-12">
          <img className="img-fluid" style={{borderRadius: '45px'}} src={val.image} alt="" />
        </div>
            </div>
          )
        })}
      
    </div>

    </div>
  )
}

export default Portfolioa