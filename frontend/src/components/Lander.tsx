import React, { useState, FormEvent, ChangeEvent} from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { createUser, loginUser } from '../api/authentication';
/*import { useHistory } from 'react-router-dom';*/

interface FormData {
  username: string;
  email: string;
  password: string;
}


const LandingPage: React.FC = () => {
  // const history = useHistory(); 
  const [isLogin, setIsLogin] = useState(true); // State to track login/signup view

  const toggleView = () => {
    setIsLogin(!isLogin); // Toggle between login and signup views
  };

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle login
        const response = await loginUser(formData);
        console.log('User logged in successfully:', response.data);
        // Redirect to the dashboard or perform other actions as needed
      } else {
        // Handle registration
        const response = await createUser(formData);
        console.log('User registered successfully:', response.data);
        // Redirect to the dashboard or perform other actions as needed
      }
    } catch (error) {
        if (error instanceof Error ){
            console.error('Error:', error.message);
        }
        else{
            console.error('Unidentified Error!');
        }
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Welcome to Chat-Haven</h1>
          {isLogin ? (
            // Login View
            <>
              <p>Login to your account:</p>
              <Form onSubmit={handleSubmit}>
                {/* Email and Password input fields */}
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                   />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Login Button */}
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <p>
                Don't have an account yet?{' '}
                <span className="link" onClick={toggleView}>
                  Register here
                </span>
              </p>
            </>
          ) : (
            // Signup View
            <>
              <p>Create a new account:</p>
              <Form onSubmit={handleSubmit}>
                {/* Signup form fields */}
                {/* Uncomment these lines and add fields for signup */}
                <Form.Group controlId="signupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                   />
                </Form.Group>
                <Form.Group controlId="userName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control 
                  type="username"
                  name="username"
                  placeholder="Enter User Name"
                  value={formData.username}
                  onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="signUpPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Signup Button */}
                {/* Uncomment this line to enable signup */}
                <hr/>
                <Button variant="success" type="submit">
                  Signup
                </Button>
              </Form>
              <p>
                Already have an account?{' '}
                <span className="link" onClick={toggleView}>
                  Login here
                </span>
              </p>
            </>
          )}
        </Col>
        <Col md={6}>{/* Add an image or any other content on the right side */}</Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
