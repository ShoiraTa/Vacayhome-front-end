/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';

const Detail = (props) => {
  const {
    image_url, name, description, price, address, city, country,
  } = props.props;
  return (
    <>
      <div className="flex">
        <div>
          <img className="images" src={image_url} alt="Tropical houses" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div>
          <p>
            This vacation home is located in
            {' '}
            {address}
&nbsp;
            {city}
&nbsp;
            {country}
          </p>
          <p>
            For the price of
            {' '}
            $
            {price}
          </p>
        </div>
        <div>
          <button type="button">Reserve</button>
        </div>
        <div>
          <a href="/">
            <BiArrowBack />
          </a>
        </div>
      </div>
    </>
  );
};

export default Detail;
