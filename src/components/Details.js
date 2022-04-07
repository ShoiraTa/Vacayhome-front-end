import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';
import '../details.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchRooms } from '../redux/rooms/rooms';
import Brand from './Navbar/Brand';
import SideBar from './Navbar/SideBar';
import Social from './Navbar/Social';

const Detail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const rooms = useSelector((state) => state.roomsReducer);

  const { houseid } = useParams();

  let house = {};

  rooms.map((element) => {
    if (element.id === parseInt(houseid, 10)) {
      house = element;
    }
    return house;
  });

  const {
    image_url: imageUrl, name, description, price, address, city, country,
  } = house;
  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col sm={2} md={2} lg={2} className="d-flex flex-column justify-content-between bg-light px-0">
            <Brand />
            <SideBar />
            <Social />
          </Col>
          <Col sm={10} md={10} lg={10}>
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
                        <a href="/">
                          <BiArrowBack className="mt-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
