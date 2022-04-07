import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { fetchRooms } from '../../redux/rooms/rooms';

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
  const houseObj = useSelector((state) => state.roomsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userid } = useParams();

  const handleSelected = (id) => {
    navigate(`/${userid}/${id}/details`);
  };

  useEffect(() => {
    dispatch(fetchRooms());
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
      { houseObj.map((house) => (
        <>
          <div
            className="carousel-img-container"
            key={house.id}
            role="link"
            tabIndex="0"
            onKeyDown={() => null}
            onClick={() => handleSelected(house.id)}
          >
            <img
              src={house.image_url}
              alt="travel vacation"
            />

            <div className="carousel-description">
              <span>3&nbsp;  guests1&nbsp;  bedroom2&nbsp;  beds1&nbsp;  bath</span>
              <p>
                <strong>{house.name}</strong>
                {house.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </Carousel>
  );
}

export default Slider;
