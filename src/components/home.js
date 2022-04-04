import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <h1 className="mb-5">Welcome to Vacay Home</h1>

      <Carousel fade className="mt-5">
        <Carousel.Item>
          <img className="d-block home-images" src="https://www.lovethispic.com/uploaded_images/106830-Tropical-Vacation-Bedroom-With-Panoramic-Ocean-View.jpg" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Wake up and feel the Ocean breeze</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block home-images" src="https://media.istockphoto.com/photos/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv-and-picture-id1213885014?k=20&m=1213885014&s=612x612&w=0&h=8TV57yZ2jqldDOjR8sK7xADHLH_0cSMXY-KXNLoS1Jw=" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Enjoy comfort at it&apos;s best</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block home-images" src="https://www.simplemost.com/wp-content/uploads/2016/06/17388775_772072786294452_4370047079117432062_o.jpg" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Sleep under the Northern lights with this comfortable igloo home</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block home-images" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/37/df/96/sandals-south-coast.jpg?w=900&h=-1&s=1" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Luxury suite in the carribean</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
