import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero-section'>
    <Container >
        <Row>
          

          
          <Col data-aos="fade-down" className='hero-main ' lg={6} xs={12}>
          <p style={{ color:'#64f4ab', fontFamily:'poppins',fontSize:'16.0016px' }}>Introducing</p>
          <h1 className='head'>Hello <br />
I'm Jessy <br /> Walter</h1>

<p>Since beginning my journey as a freelance designer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products</p>
          
<div  style={{ border:'1px solid #fffff'}}>
        

        <button className="contact-button" > <Link className="nav-link" to="/contact"> Contact Me</Link></button>
      </div>

          </Col>
          <Col lg={6} xs={12}>
          <img data-aos="fade-up" className="img-fluid"  src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png" alt="" /></Col>
        </Row>
        </Container>
        </div>
  )
}

export default Hero