import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';

function AddHouseForm() {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');

  console.log(city);

  return (
    <Form>
      <Form.Control type="text" placeholder="Apartment name" className="w-50 mb-3" />
      <Form.Control type="text" placeholder="Apartment type" className="w-50 mb-3" />
      <Form.Control type="number" placeholder="Price" className="w-50 mb-3" />
      <Form.Control as="textarea" rows={3} placeholder="Description" className="mb-3" />
      <Form.Control type="url" placeholder="Image url" className="mb-3" />

      <Form.Select
        aria-label="Default select example"
        className="w-50 mb-3"
        onChange={(e) => setCountry(e.target.value)}
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
      >
        <option>City</option>
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

      <Form.Control type="text" placeholder="Street address" className="w-75 mb-3" />

      <div className="text-center">
        <Button variant="success" type="submit">
          Add Listing
        </Button>
      </div>
    </Form>
  );
}

export default AddHouseForm;
