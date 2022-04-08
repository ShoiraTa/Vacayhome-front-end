import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Slider from './Slider';
import Logo from '../../assets/images/VacayHome.png';
import { fetchUsers } from '../../redux/users/usersReducer';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.usersReducer);

  console.log(users);
  const handleLogin = () => {
    users.map((user) => {
      if (user.email === userEmail) {
        navigate(`/${user.id}`);
      }
      return 'hey';
    });
  };

  return (
    <Container fluid>
      <Container className="login-card col-4 pb-5 bg-white border rounded">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" required onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Button variant="success" type="submit" onClick={() => handleLogin()}>
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
