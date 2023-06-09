import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const About = () => {
  return (
    <>
      <div className="container carousel_sec">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
         <div>
         <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5 col-12">
              <div className="carousel_left">
                <img
                  className="img-fluid"
                  src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="carousel_right">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex!
                </p>
                <h3>Amman Payne</h3>
                <h4>CEO of Figma</h4>
              </div>
            </div>
          </div>
         </div>
          <div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5 col-12">
              <div className="carousel_left">
                <img
                  className="img-fluid"
                  src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/testimonials-img.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="carousel_right">
                <p>
                  The quick, brown fox jumps over a lazy dog. DJs flock by when
                  MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                  jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick
                  jigs vex!
                </p>
                <h3>Jared Warner</h3>
                <h4>CEO of Figma</h4>
              </div>
            </div>
          </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default About;
