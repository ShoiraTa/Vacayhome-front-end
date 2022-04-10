import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchRooms } from '../redux/rooms/rooms';
import Brand from './Navbar/Brand';
import SideBar from './Navbar/SideBar';
import Social from './Navbar/Social';


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
            <div className="details-text-container">
              <div>
                <h3>{name}</h3>
                <p className="description my-4">{description}</p>
                <div>
                  <p className="description">
                    This vacation home is located in
                    {' '}
                    {address}
    &nbsp;
                    {city}
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
                  <button variant="success" className="btn-success reserve-btn mt-4" size="lg" type="button">Reserve</button>
                </div>
                <div>
                  <a href={`/${userid}`}>
                    <BiArrowBack className="mt-4" />
                  </a>
                </div>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </>
  );
};

export default Detail;
