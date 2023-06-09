
import React from 'react'
import { Link } from 'react-router-dom'
import { BsDribbble} from "react-icons/bs";
import Contactus from '../../pages/Contactus';


const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg  bg-#25272b" style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/portfolio-website">
          <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt="Logo" style={{ height: '40px'  }} />

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white" />
          </button>
          <div className="collapse navbar-collapse  align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav pd-120  mr-auto text-center mb-2   mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/portfolio-website">
                Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                Contact
                </Link>
              </li>
              
            </ul>

  <div className="social-icons" style={{ marginLeft: '280px',marginTop:'5px' }}>
  <li>
                  <a href="#">
                    <BsDribbble
                      size={40}
                      color=""
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
      </div>

<div className='d-flex justify-content-center'>
<button className="hcontact-button" >     <Link className="nav-link" to="/contact"> Contact Me</Link></button>
</div>
          </div>
          
        </div>


      
    

      </nav>

     

    </>
  )
}

export default Header


