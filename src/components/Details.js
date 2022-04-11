import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import '../details.css';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { fetchRooms } from '../redux/rooms/rooms';

const userid = localStorage.getItem('userId');
const Detail = (props) => {
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
  } = props.props;
  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
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
        </Row>
      </Container>
    </>
  );
};
export default Detail;
