import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';
import Card from 'react-bootstrap';

const userid = localStorage.getItem('userId');
const Detail = (props) => {
  const {
    image_url: imageUrl, name, description, price, address, city, country,
  } = props.props;
  return (
    <>
      <div className="details-container">
        <div className="flex-direction">
          <div>
            <img className="images" src={imageUrl} alt="Tropical houses" />
          </div>
          <Card.Body>
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
              <a href={`/${userid}`}>
                <BiArrowBack />
              </a>
            </div>
          </Card.Body>
        </div>
      </div>
    </>
  );
};

export default Detail;
