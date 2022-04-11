import React from 'react';
import { Alert } from 'react-bootstrap';
import AddHouseForm from './AddHouseForm';

function Response({ show, setShow }) {
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Congratulations!!!</Alert.Heading>
        <p>New listing has been successfully created.</p>
      </Alert>
    );
  }
  return <AddHouseForm />;
}

export default Response;
