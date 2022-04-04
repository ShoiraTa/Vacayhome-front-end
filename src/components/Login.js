import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Slider from './Slider';
import Logo from '../assets/images/VacayHome.png';

function Login() {
  return (
    <Container fluid>
      <Container className="login-card col-4 pb-5 bg-white border rounded">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <Form>
          <Form.Group className="mt-3 mb-3" controlId="formBasicName">
            <Form.Control type="text" placeholder="Full name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" required />
            <Form.Text className="text-muted">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="text-center">
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
      <Slider />
    </Container>
  );
}

export default Login;
