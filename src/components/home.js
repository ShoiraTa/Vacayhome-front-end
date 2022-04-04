import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      <h1>Welcome to Vacay Home</h1>

      <Carousel fade>
        <Carousel.Item>
          <img className="d-block home-images" src="https://www.lovethispic.com/uploaded_images/106830-Tropical-Vacation-Bedroom-With-Panoramic-Ocean-View.jpg" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Wake up and feel the Ocean breeze</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block home-images" src="https://www.fancypantshomes.com/wp-content/uploads/2021/06/The-butterfly-house-bali.jpg" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Get closer to nature with this comfortable Vacation home</p>
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
          <img className="d-block home-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYhgCMWFwo4ul4-ug2k866TYSViVyGdU5cw&usqp=CAU" alt="Tropical Vacation Bedroom" />
          <Carousel.Caption>
            <p>Want something different??... Get a floating home</p>
            <button type="submit">See more details</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
