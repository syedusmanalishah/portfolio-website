import React from 'react'
import Logo from "../images/img1.svg"
import { Container, Row, Col,Card} from 'react-bootstrap';


const Section = () => {
  return (
    <div className='Section-section'>
    <Container >
        <Row>




        <Col data-aos="zoom-in" lg={3} xs={12} className='d-flex justify-content-around'  >
     
          <Card className='section-card' >  
  <Card.Img variant="top" className='section-logo' src="assets/images/pd.svg"   />  

  <Card.Body>  
    <Card.Title  id='cardtitle'><h3 >Product Design</h3></Card.Title>  
    <Card.Text id='cardtext'>  
    The technological revolution is  changing aspect</Card.Text>  

        </Card.Body>  
        </Card>
        </Col>  
        
        <Col data-aos="zoom-in" lg={3} xs={12} className='d-flex justify-content-around'  >

          <Card className='section-card mt-4' >  
          <Card.Img variant="top" className='section-logo'  src="assets/images/id.svg"  />  

<Card.Body>  
  <Card.Title  id='cardtitle'><h3 >Logo Design</h3></Card.Title>  
  <Card.Text>  
  The technological revolution is  changing aspect</Card.Text>  

      </Card.Body>  
      </Card>

      </Col>




          <div class="w-100"></div>

          
          <Col data-aos="zoom-in" lg={3} xs={12} className='d-flex justify-content-around mt-3'  >
     
     <Card className='section-card' >  
<Card.Img variant="top" className='section-logo' src="assets/images/ud.svg"  />  

<Card.Body>  
<Card.Title  id='cardtitle'><h3 >UI Design</h3></Card.Title>  
<Card.Text id='cardtext'>  
The technological revolution is  changing aspect</Card.Text>  

   </Card.Body>  
   </Card>
   </Col>  
   
   <Col data-aos="zoom-in" lg={3} xs={12} className='d-flex justify-content-around mt-3'   >

     <Card className='section-card mt-4' >  
     <Card.Img variant="top" className='section-logo' src="assets/images/icd.svg"  />  

<Card.Body>  
<Card.Title  id='cardtitle'><h3 >Product Design</h3></Card.Title>  
<Card.Text>  
The technological revolution is  changing aspect</Card.Text>  

 </Card.Body>  
 </Card>

 </Col>

          
         

                <Col data-aos="fade-up"  lg={6} xs={12} className='Section-main '>
          <p style={{ color:'#64f4ab', fontFamily:'poppins',fontSize:'16.0016px' }}>My Skills</p>
          <h2 className='Section-head'>Why Hire Me For Next Project?</h2>
<p>he technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can</p>       

        <button className="Section-contact-button" href="https://demo.phlox.pro/freelancer/contact/"> Download Cv</button>
 


          </Col>  
        
      
        
      </Row>
        </Container>
        </div>
  )
}

export default Section