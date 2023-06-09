import React from 'react'
import { BsBehance, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom'

import { Row,Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
      <footer  d-flex justify-content-center id='footer-main'
        className="footer text-center text-lg-start text-white"
        style={{ backgroundColor: "#172026" }}
      >


<Row className=''>
<Col lg={2} className ="footer-logo " >

       <Link to="/portfolio-website" >
          <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="Logo" style={{ height: '40px' }} />
          </Link> 
  
</Col>


<Col lg={7}    >


            <div className='footer-text  ' >
       
              <strong  style={{ color: "#b7b8bb" }}>
              © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.
              </strong>
              </div>
</Col>

<Col lg={3} className= '  '>

          
           
            
           
           
              <ul id='footer-social' className=" icons list-unstyled  d-flex justify-content-around   col-12 icons px-4 ">
                <li>
                  <a href="#">
                    <BsLinkedin
                      size={40}
                      color="#ffaf29"
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsLinkedin
                      size={40}
                      color="#ffaf29"
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
         
                  <a href="#"     style={{
                    
                    border: "2px solid #fff)",
                    borderRadius: "50%",
                    padding: "4px",
                  }}>
                    <BsInstagram
                      color="#ffaf29"
                      size={40}
                   
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsBehance
                      color="#ffaf29"
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                
              </ul>
             
              
        
    
        
    

</Col>
</Row>



     
      </footer>
    </>
  )
}

export default Footer