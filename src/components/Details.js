import React from 'react';

const Detail = ({ selectedHouse }) => (
  <>
    <div>
      <img src={selectedHouse.image_url} alt="TRopical houses" />
    </div>
    <div>
      <h3>{selectedHouse.name}</h3>
      <p>{selectedHouse.description}</p>
    </div>
    <div>
      <p>
        This vacation home is located in
        {' '}
        {selectedHouse.location}
      </p>
      <p>
        For the price of
        {' '}
        $
        {selectedHouse.price}
      </p>
    </div>
    <div>
      <button type="button" onClick={selectedHouse}>Reserve</button>
    </div>

  </>
);

export default Detail;
