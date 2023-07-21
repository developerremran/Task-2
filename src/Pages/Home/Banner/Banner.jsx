/* eslint-disable no-unused-vars */
import React from 'react';
// import banner from '../../../images/banner/banner.png'
import './bannerStyle.css'
import { Col, Container, Row } from 'react-bootstrap';
import { MdArrowBack } from 'react-icons/md';
const Banner = () => {
  return (
    <div>
      <section className="hero-section">
        {/* Background image */}
        <div className="hero-bg-image"></div>
        {/* Content */}
        <Container>
          <Row className='mainWidth'>
            <Col className=''>
            <div style={{marginTop:'20px', color:'white'}} 
            className='d-flex d-block d-lg-none  justify-content-between '>
                <div>
                   <MdArrowBack style={{fontSize:'50px'}}></MdArrowBack> 
                </div>
                <div>
                <button type="button" className="btn btn-outline-secondary" style={{ color:'white'}} disabled>Button</button>
                </div>
            </div>
              <div className="hero-content  d-none d-lg-block">
                <h1 className="hero-title">Computer Engineering</h1>
                <p className="hero-subtitle">142,765 Computer Engineers follow this</p>
              </div>
              <div className='d-block d-lg-none' style={{paddingTop:'300px'}}>
                <h1 className="hero-title" 
                 >Computer Engineering</h1>
                <p className="hero-subtitle">142,765 Computer Engineers follow this</p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Banner;