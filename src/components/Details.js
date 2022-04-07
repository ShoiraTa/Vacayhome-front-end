import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import '../details.css';

const Detail = (props) => {
  const {
    image_url: imageUrl, name, description, price, address, city, country,
  } = props.props;
  return (
    <>
      <div className="details-container">
        <Card className="flex-direction">
          <div>
            <img className="images" src={imageUrl} alt="Tropical houses" />
          </div>
          <Card.Body>
            <div className="details-text-container">
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
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
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Detail;
