import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Detail = (props) => {
  const { user_id: userId } = useParams();

  const {
    image_url: imageUrl, name, description, price, address, city, country, id,
  } = props.props;

  return (
    <Container>
      <div className="details-container">
        <div className="flex-direction">
          <div>
            <img className="thumbnail images rounded" src={imageUrl} alt="vacation house" />
          </div>
          <Card.Body>
            <div className="details-text-container">
              <div>
                <h3 className="text-dark">{name}</h3>
                <p className="description my-4">{description}</p>
                <div>
                  <p className="description">
                    This vacation home is located in
                    {' '}
                    {address}
                    ,
                    &nbsp;
                    {city}
                    ,
                    &nbsp;
                    {country}
                  </p>
                  <p className="description">
                    For the price of
                    {' '}
                    $
                    {price}
                  </p>
                </div>
                <div>
                  <Link to={`/${userId}/${id}/reservation`}>
                    <button variant="success" className="btn-success theme-btn mt-4 rounded" size="lg" type="button">Reserve</button>
                  </Link>
                </div>
                <div>
                  <a href={`/${userId}`}>
                    <BiArrowBack className="mt-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
};
export default Detail;
