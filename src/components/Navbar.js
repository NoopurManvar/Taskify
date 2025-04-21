import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container, Dropdown, Modal, Button, Form, Image } from 'react-bootstrap';
import logo from '../images/logo3.PNG'; // Update this path

const Navbar = ({ user, onLogout }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setShowProfileModal(false);
  };

  return (
    <>
      <BSNavbar 
        expand="lg"
        className="navbar-professional"
        style={{ 
          minHeight: '80px',
          backgroundColor: '#f5f5f7',
          borderBottom: '1px solidrgb(163, 220, 228)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}
      >
        <Container fluid>
          <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Image 
              src={logo} 
              alt="Company Logo"
              style={{
                height: '55px',
                marginRight: '12px',
                marginLeft:'30px',
                objectFit: 'contain',
                
              }}
            />
          </BSNavbar.Brand>
          
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-3">
              <Nav.Link 
                as={Link} 
                to="/dashboard" 
                className="px-3 py-2 nav-link-professional"
              >
                Dashboard
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/tasks" 
                className="px-3 py-2 nav-link-professional"
              >
                Tasks
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/teams" 
                className="px-3 py-2 nav-link-professional"
              >
                Teams
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/trash" 
                className="px-3 py-2 nav-link-professional"
              >
                Trash
              </Nav.Link>
            </Nav>
            
            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle 
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex align-items-center border-0 user-toggle"
                >
                  <span className="me-2 user-name">{user?.name || 'User'}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-professional">
                  <Dropdown.Item 
                    onClick={() => setShowProfileModal(true)}
                    className="dropdown-item-professional"
                  >
                    Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item 
                    onClick={handleLogout}
                    className="dropdown-item-professional"
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      {/* Profile Edit Modal */}
      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)} centered>
        <Modal.Header 
          closeButton
          style={{
            borderBottom: '1px solid #e8e8ed',
            padding: '1.25rem'
          }}
        >
          <Modal.Title style={{ color: '#2d2d32' }}>Edit Profile</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleProfileSubmit}>
          <Modal.Body style={{ padding: '1.5rem' }}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#6a6a70', fontWeight: 500 }}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                required
                style={{
                  backgroundColor: '#fafafc',
                  border: '1px solid #e8e8ed',
                  padding: '0.75rem'
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#6a6a70', fontWeight: 500 }}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                required
                style={{
                  backgroundColor: '#fafafc',
                  border: '1px solid #e8e8ed',
                  padding: '0.75rem'
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer style={{ 
            borderTop: '1px solid #e8e8ed',
            padding: '1.25rem'
          }}>
            <Button 
              variant="outline-secondary" 
              onClick={() => setShowProfileModal(false)}
              className="modal-btn-secondary"
            >
              Close
            </Button>
            <Button 
              variant="primary" 
              type="submit"
              className="modal-btn-primary"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Add this CSS for better consistency */}
      <style jsx>{`
        .nav-link-professional {
          color: #4a4a4f !important;
          font-weight: 500;
          transition: all 0.2s ease;
          border-radius: 6px;
        }
        .nav-link-professional:hover {
          color: #2d2d32 !important;
          background-color: #e8e8ed;
        }
        .user-toggle {
          background-color: transparent !important;
          color: #4a4a4f !important;
          height: 40px;
          transition: all 0.2s ease;
        }
        .user-toggle:hover {
          background-color: #e8e8ed !important;
        }
        .user-name {
          color: #4a4a4f;
          font-weight: 500;
        }
        .dropdown-menu-professional {
          border: 1px solid #e8e8ed;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border-radius: 8px;
          padding: 0.5rem;
        }
        .dropdown-item-professional {
          color: #4a4a4f;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 500;
        }
        .dropdown-item-professional:hover {
          background-color: #f5f5f7;
          color: #2d2d32;
        }
        .modal-btn-secondary {
          background-color: transparent;
          color: #6a6a70;
          border: 1px solid #e8e8ed;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          font-weight: 500;
        }
        .modal-btn-secondary:hover {
          background-color: #f5f5f7;
        }
        .modal-btn-primary {
          background-color: #4a6bff;
          border: none;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          font-weight: 500;
        }
        .modal-btn-primary:hover {
          background-color: #3a5bef;
        }
      `}</style>
    </>
  );
};

export default Navbar;