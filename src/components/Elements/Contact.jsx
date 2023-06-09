import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container contact_sec">
      <div className="row my-5">
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center ">
          <p className="title">Contact Me </p>
          <h2 className="head">Get In Touch With Me</h2>
          <p className="para">
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert Factual knowledge is less prized when
            everything you ever need to know can be found at doing everything.
          </p>
          <div className="d-flex align-items-center bg_color mt-5">
            <div className="image">
                <img src="assets/images/c1.svg" alt="" />
            </div>
            <div className="mx-5">
                <div className="name">Phone</div>
                <div className="numbers">
                    <p>+99 (0) 101 0000 888</p>
                    <p>+99 (0) 101 0000 777</p>
                </div>
            </div>
          </div>
          <div className="contact-n d-flex align-items-center bg_color mt-5 ">
            <div className="image">
                <img src="assets/images/c2.svg" alt="" />
            </div>
            <div className="email mx-5">
                <div className="name">Email</div>
                <div className="numbers">
                    <p>+99 (0) 101 0000 888</p>
                    <p>+99 (0) 101 0000 777</p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
            <div className="top_input d-flex justify-content-between">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
            </div>
            <div className="text_field">
                <textarea name="message" placeholder="Message *" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="work_btn mt-2">
          <Link >Send To Me</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
