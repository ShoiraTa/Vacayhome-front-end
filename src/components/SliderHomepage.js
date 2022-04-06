import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Detail from './Details';
import { fetchHouses } from '../redux/rooms/rooms';

function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 454 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [selectedHouse] = useState('');
  const houseObj = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, []);
  return (
    <Carousel
      arrows
      renderButtonGroupOutside
      swipeable
      draggable={false}
      responsive={responsive}
      infinite
      autoPlaySpeed={8000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {!selectedHouse ? houseObj.map((house) => (
        <>
          <div className="carousel-img-container" key={house.id}>
            <a href="/login">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e72c8bfe21ad940ba788673/1621016255763-WDHM79J11KCDQW4DIKFX/airbnb-short-term-versus-long-term-rentals-thumbnail.jpg"
                className="d-block w-100"
                alt="travel vacation"
              />
            </a>

            <div className="carousel-description">
              <span>3&nbsp;  guests1&nbsp;  bedroom2&nbsp;  beds1&nbsp;  bath</span>
              <p>
                <strong>Marisha’s Apartment&nbsp; </strong>
                Light and cosy apartment with good location
              </p>
            </div>
          </div>
          <div className="carousel-img-container">
            {' '}
            <a href="/login">
              <img
                src="https://media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_20067_listing_image_3312cf45f2bd4132b66383de82807b23-glamping-f7618228-f263-4c69-b8f8-5c73254173e2/b9284237867e3bcf30a77b248c7835ea.jpg"
                className="d-block w-100"
                alt="travel vacation"
              />
            </a>
            <div className="carousel-description">
              <span>3&nbsp;  guests1&nbsp;  bedroom2&nbsp;  beds1&nbsp;  bath</span>
              <p>
                <strong>Marisha’s Apartment&nbsp; </strong>
                Light and cosy apartment with good location
              </p>
            </div>
          </div>
          <div className="carousel-img-container">
            {' '}
            <a href="/login">
              <img
                src="https://www.extraspace.com/blog/wp-content/uploads/2020/10/preparing-home-for-airbnb.jpg"
                className="d-block w-100"
                alt="travel vacation"
              />
            </a>
            <div className="carousel-description">
              <span>3&nbsp;  guests1&nbsp;  bedroom2&nbsp;  beds1&nbsp;  bath</span>
              <p>
                <strong>Marisha’s Apartment&nbsp; </strong>
                Light and cosy apartment with good location
              </p>
            </div>
          </div>
          <div className="carousel-img-container">
            <a href="/login">
              <img
                src="https://rdcnewscdn.realtor.com/wp-content/uploads/2019/04/Airbnb-Rental-Property-1.jpg"
                className="d-block w-100"
                alt="travel vacation"
              />
            </a>
            <div className="carousel-description">
              <span>3&nbsp;  guests1&nbsp;  bedroom2&nbsp;  beds1&nbsp;  bath</span>
              <p>
                <strong>Marisha’s Apartment&nbsp; </strong>
                Light and cosy apartment with good location
              </p>
            </div>
          </div>

        </>
      ))
        : <Detail selectedCar={selectedHouse} />}
    </Carousel>
  );
}

export default Slider;
