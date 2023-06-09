import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <div className="container work_section">
        <div className="work_bg position-relative">
            <div className="top_img">
                <img data-aos="fade-up" src="assets/images/in1.svg" className="img1" alt="" />
                <img data-aos="fade-up" src="assets/images/in2.svg" className="img2" alt="" />
            </div>
            <div className="text_bg">
            <h2 data-aos="fade-up">Lets Work Together</h2>
          <p data-aos="fade-up">
            The technological revolution is changing aspect of our lives, and
            the fabric of <br /> society itself. it's also changing the way we learn
            and what we learn
          </p>
          <div data-aos="fade-up"className="d-flex justify-content-center work_btn mb-3">
          <Link >Contact Me</Link>
        </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Work;
