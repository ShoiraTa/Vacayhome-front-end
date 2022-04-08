import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';
import { postRooms } from '../../redux/rooms/rooms';

function AddHouseForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      name,
      price,
      description,
      country: Country.getCountryByCode(country).name,
      city,
      address,
      property_type: propertyType,
      image_url: imageUrl,
    };

    dispatch(postRooms(newHouse));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Apartment name"
        className="w-50 mb-3"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Form.Control
        type="text"
        placeholder="Apartment type"
        className="w-50 mb-3"
        onChange={(e) => setPropertyType(e.target.value)}
        required
      />

      <Form.Control
        type="number"
        placeholder="Price (US Dollar)"
        className="w-50 mb-3"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Description"
        className="w-50 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Form.Select
        aria-label="Default select example"
        className="w-50 mb-3"
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option>Country</option>
        {
          Country.getAllCountries().map((country) => (
            <option
              key={country.isoCode}
              value={country.isoCode}
            >
              {country.name}
            </option>
          ))
        }
      </Form.Select>

      <Form.Select
        aria-label="Default select example"
        className="w-50 mb-3"
        onChange={(e) => setRegion(e.target.value)}
        required
      >
        <option>State/Province/Region</option>
        {
          country ? (
            State.getStatesOfCountry(country).map((region) => (
              <option
                key={region.isoCode}
                value={region.isoCode}
              >
                {region.name}
              </option>
            ))
          ) : (
            <option className="text-secondary">Please select country...</option>
          )
        }
      </Form.Select>

      <Form.Select
        aria-label="Default select example"
        className="w-50 mb-3"
        onChange={(e) => setCity(e.target.value)}
        required
      >
        <option>City/Suburb</option>
        {
          region ? (
            City.getCitiesOfState(country, region).map((city) => (
              <option
                key={city.name}
                value={city.name}
              >
                {city.name}
              </option>
            ))
          ) : (
            <option className="text-secondary">Please select country and region...</option>
          )
        }
      </Form.Select>

      <Form.Control
        type="text"
        placeholder="Street address"
        className="w-75 mb-3"
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <Form.Control
        type="url"
        placeholder="Image url"
        className="w-75 mb-3"
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <div className="text-center mb-5">
        <Button variant="success" className="theme-btn rounded" type="submit">
          Add Listing
        </Button>
      </div>
    </Form>
  );
}

export default AddHouseForm;
