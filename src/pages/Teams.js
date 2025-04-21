import React, { useState } from 'react';
import { 
  Container, Button, Card, Form, Row, Col, 
  Table, Badge, Modal, ListGroup, InputGroup,
  Dropdown
} from 'react-bootstrap';

const TeamsPage = () => {
  // Color scheme
  const colors = {
    background: '#f8f9fa',
    cardBackground: '#ffffff',
    border: '#e0e0e0',
    primary: '#6c5ce7',
    textPrimary: '#2d3748',
    textSecondary: '#4a5568'
  };

  // Initial data
  const initialUsers = ['John Doe', 'Sarah Smith', 'Mike Johnson'];
  const initialTeams = [
    { 
      id: 1, 
      name: 'Development', 
      description: 'Product development team', 
      members: ['John Doe', 'Mike Johnson'],
      tasks: []
    }
  ];

  // State management
  const [users, setUsers] = useState(initialUsers);
  const [teams, setTeams] = useState(initialTeams);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newUser, setNewUser] = useState('');
  const [newTeam, setNewTeam] = useState({
    name: '',
    description: '',
    members: []
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // Team functions
  const handleCreateTeam = () => {
    if (!newTeam.name.trim()) return; // Validate team name
    
    const team = {
      ...newTeam,
      id: teams.length + 1,
      tasks: []
    };
    setTeams([...teams, team]);
    setNewTeam({ name: '', description: '', members: [] });
    setShowCreateModal(false);
  };

  const handleAddUser = () => {
    if (!newUser.trim() || users.includes(newUser)) return; // Validate user
    
    setUsers([...users, newUser]);
    setNewUser('');
    setShowAddUserModal(false);
  };

  const handleAddMember = (teamId, member) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { ...team, members: [...team.members, member] }
        : team
    ));
  };

  const handleRemoveMember = (teamId, member) => {
    setTeams(teams.map(team => 
      team.id === teamId 
        ? { ...team, members: team.members.filter(m => m !== member) }
        : team
    ));
  };

  return (
    <Container className="mt-4" style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '2rem' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: colors.textPrimary }}>Teams Management</h2>
        <div>
          <Button 
            variant="primary" 
            onClick={() => setShowCreateModal(true)}
            style={{ backgroundColor: colors.primary, border: 'none', marginRight: '1rem' }}
          >
            Create Team
          </Button>
          <Button 
            variant="success" 
            onClick={() => setShowAddUserModal(true)}
            style={{ backgroundColor: '#00b894', border: 'none' }}
          >
            Add User
          </Button>
        </div>
      </div>

      {/* Teams Table */}
      <Row>
        <Col md={selectedTeam ? 8 : 12}>
          <Card style={{ backgroundColor: colors.cardBackground, border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
            <Card.Body>
              <Table hover responsive>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9' }}>
                    <th>Team Name</th>
                    <th>Description</th>
                    <th>Members</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(team => (
                    <tr key={team.id} onClick={() => setSelectedTeam(team)} style={{ cursor: 'pointer' }}>
                      <td style={{ fontWeight: 500 }}>{team.name}</td>
                      <td>{team.description}</td>
                      <td><Badge bg="secondary">{team.members.length}</Badge></td>
                      <td>
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTeam(team);
                          }}
                        >
                          Manage
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Team Details */}
        {selectedTeam && (
          <Col md={4}>
            <Card style={{ backgroundColor: colors.cardBackground, border: `1px solid ${colors.border}`, borderRadius: '8px' }}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 style={{ margin: 0 }}>{selectedTeam.name}</h5>
                <Button variant="outline-secondary" size="sm" onClick={() => setSelectedTeam(null)}>
                  Close
                </Button>
              </Card.Header>
              <Card.Body>
                <p>{selectedTeam.description}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6>Members</h6>
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" size="sm">
                      Add Member
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {users.filter(user => !selectedTeam.members.includes(user)).map(user => (
                        <Dropdown.Item 
                          key={user} 
                          onClick={() => handleAddMember(selectedTeam.id, user)}
                        >
                          {user}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <ListGroup>
                  {selectedTeam.members.map((member, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                      {member}
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        onClick={() => handleRemoveMember(selectedTeam.id, member)}
                      >
                        Remove
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>

      {/* Create Team Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Team Name *</Form.Label>
              <Form.Control 
                type="text" 
                value={newTeam.name}
                onChange={(e) => setNewTeam({...newTeam, name: e.target.value})}
                placeholder="Enter team name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={newTeam.description}
                onChange={(e) => setNewTeam({...newTeam, description: e.target.value})}
                placeholder="Enter team description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Add Members</Form.Label>
              <Form.Select 
                multiple
                value={newTeam.members}
                onChange={(e) => {
                  const options = Array.from(e.target.selectedOptions, option => option.value);
                  setNewTeam({...newTeam, members: options});
                }}
                size="5"
              >
                {users.map(user => (
                  <option key={user} value={user}>{user}</option>
                ))}
              </Form.Select>
              <Form.Text className="text-muted">Hold Ctrl/Cmd to select multiple</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleCreateTeam}
            disabled={!newTeam.name.trim()}
          >
            Create Team
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add User Modal */}
      <Modal show={showAddUserModal} onHide={() => setShowAddUserModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control 
                type="text" 
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Enter user's full name"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddUserModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="success" 
            onClick={handleAddUser}
            disabled={!newUser.trim() || users.includes(newUser)}
          >
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TeamsPage;