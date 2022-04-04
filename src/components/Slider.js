import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={1000} className="carousel-item">
        <img
          src="https://traveler.marriott.com/wp-content/uploads/2021/02/HuatulcoOaxaca_6VillaEscondida_9.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621016255763-WDHM79J11KCDQW4DIKFX/airbnb-short-term-versus-long-term-rentals-thumbnail.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_20067_listing_image_3312cf45f2bd4132b66383de82807b23-glamping-f7618228-f263-4c69-b8f8-5c73254173e2/b9284237867e3bcf30a77b248c7835ea.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://www.extraspace.com/blog/wp-content/uploads/2020/10/preparing-home-for-airbnb.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://media.cntraveler.com/photos/589df60a9b67416638b3bf66/16:9/w_1280,c_limit/luxury-retreats-cr-courtesy.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://rdcnewscdn.realtor.com/wp-content/uploads/2019/04/Airbnb-Rental-Property-1.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          src="https://media.cntraveler.com/photos/5e9907c14ab09800086faf63/master/w_1400,h_933,c_limit/airbnb-view-37143825.jpg"
          className="d-block w-100"
          alt="travel vacation"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
