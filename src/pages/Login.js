import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock authentication - in a real app, you would call an API here
    if (email === 'admin@example.com' && password === 'admin123') {
      onLogin({
        id: 1,
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin'
      });
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
      <Card style={{ width: '400px' }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">Task Manager Pro</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;