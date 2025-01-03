import React, {useRef} from 'react';

import BannerBg from '../assets/images/banner-bg.jpg'
import {Container, Row, Col, Carousel, Button} from "react-bootstrap";
import {GrFormNext, GrNext, GrPrevious} from "react-icons/gr";


const Slider = () => {

  const sliderRef = useRef(null);

  const onPrevClick = () => {
    sliderRef.current.prev();
  };
  const onNextClick = () => {
    sliderRef.current.next();
  };
 
    return (
        <div id="slider">
          <div className="banner-section py-5">
              <Container>
                <Row className="justify-content-star">
                  <Col md={{span:4, offset:2}}>
                    <Row className="mt-md-5">
                    
                    </Row>
                  </Col>
                </Row>
              </Container>
          </div>
        </div>
    );
};
export default Slider;