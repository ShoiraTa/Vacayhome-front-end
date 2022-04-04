import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Slider from './Slider';
import Logo from '../assets/images/VacayHome.png';

function Login() {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Container className="login-card col-4 pb-5 bg-white border rounded">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Username/email address" required />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form.Group>
        </Form>
        <div>
          <p>
            Don&apos;t have an account?
            {' '}
            <span>
              <button
                type="button"
                onClick={() => { navigate('/register'); }}
                className="access-btn text-primary"
              >
                Register
              </button>
            </span>
          </p>
        </div>
      </Container>
      <Slider />
    </Container>
  );
}

export default Login;
