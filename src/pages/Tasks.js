import React, { useState } from 'react';
import { Container, Button, Card, Form, Row, Col, Table, Badge, Dropdown, Modal } from 'react-bootstrap';

const Tasks = () => {
  // Color scheme
  const colors = {
    background: '#f8f9fa', // Slightly darker than white
    cardBackground: '#ffffff',
    border: '#e0e0e0',
    primary: '#4a6bff', // Soft blue
    success: '#66bb6a', // Soft green (replaced with teal)
    warning: '#ffa726', // Soft orange
    danger: '#ef5350', // Soft red
    textPrimary: '#2d3748',
    textSecondary: '#4a5568'
  };

  // Mock tasks data with updated status colors
  const initialTasks = [
    { 
      id: 1, 
      title: 'Complete project proposal', 
      description: 'Finish the proposal document for client review', 
      status: 'In Progress', 
      priority: 'High', 
      assignedTo: 'John Doe', 
      dueDate: '2023-06-15', 
      isDeleted: false,
      statusColor: colors.warning,
      priorityColor: colors.danger
    },
    { 
      id: 2, 
      title: 'Review team performance', 
      description: 'Analyze Q2 performance metrics', 
      status: 'Completed', 
      priority: 'Medium', 
      assignedTo: 'Sarah Smith', 
      dueDate: '2023-06-10', 
      isDeleted: false,
      statusColor: '#66bb6a', // Soft teal instead of green
      priorityColor: colors.warning
    },
    { 
      id: 3, 
      title: 'Fix critical bug', 
      description: 'Fix login issue reported by users', 
      status: 'To Do', 
      priority: 'High', 
      assignedTo: 'Mike Johnson', 
      dueDate: '2023-06-12', 
      isDeleted: false,
      statusColor: '#a0aec0', // Soft gray
      priorityColor: colors.danger
    },
    { 
      id: 4, 
      title: 'Update documentation', 
      description: 'Update API documentation for new features', 
      status: 'Completed', 
      priority: 'Low', 
      assignedTo: 'Emma Wilson', 
      dueDate: '2023-06-05', 
      isDeleted: false,
      statusColor: '#66bb6a', // Soft teal
      priorityColor: colors.primary
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'To Do',
    priority: 'Medium',
    assignedTo: '',
    dueDate: '',
  });

  // ... (rest of your existing functions remain the same)
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return !task.isDeleted;
    if (filter === 'High Priority') return task.priority === 'High' && !task.isDeleted;
    if (filter === 'Completed') return task.status === 'Completed' && !task.isDeleted;
    if (filter === 'To Do') return task.status === 'To Do' && !task.isDeleted;
    if (filter === 'In Progress') return task.status === 'In Progress' && !task.isDeleted;
    return !task.isDeleted;
  });

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, isDeleted: true } : task
    ));
  };

  const handleCreateTask = () => {
    const task = {
      ...newTask,
      id: tasks.length + 1,
      isDeleted: false,
    };
    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      description: '',
      status: 'To Do',
      priority: 'Medium',
      assignedTo: '',
      dueDate: '',
    });
    setShowCreateModal(false);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'primary';
      default: return 'secondary';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'To Do': return 'secondary';
      default: return 'info';
    }
  };

  return (
    <Container className="mt-4" style={{ backgroundColor: colors.background, minHeight: '100vh', padding: '2rem' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 style={{ color: colors.textPrimary }}>Tasks Management</h2>
        <Button 
          variant="primary" 
          onClick={() => setShowCreateModal(true)}
          style={{ 
            backgroundColor: colors.primary,
            border: 'none',
            padding: '0.5rem 1.5rem'
          }}
        >
          Create New Task
        </Button>
      </div>

      <Card className="mb-4" style={{ 
        backgroundColor: colors.cardBackground,
        border: `1px solid ${colors.border}`,
        borderRadius: '8px'
      }}>
        <Card.Body>
          <div className="d-flex flex-wrap gap-2">
            <Button 
              onClick={() => handleFilterChange('All')}
              style={{ 
                backgroundColor: filter === 'All' ? colors.primary : 'transparent',
                color: filter === 'All' ? 'white' : colors.textSecondary,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px'
              }}
            >
              All Tasks
            </Button>
            <Button 
              onClick={() => handleFilterChange('High Priority')}
              style={{ 
                backgroundColor: filter === 'High Priority' ? colors.danger : 'transparent',
                color: filter === 'High Priority' ? 'white' : colors.danger,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px'
              }}
            >
              High Priority
            </Button>
            <Button 
              onClick={() => handleFilterChange('Completed')}
              style={{ 
                backgroundColor: filter === 'Completed' ? '#66bb6a' : 'transparent',
                color: filter === 'Completed' ? 'white' : '#66bb6a',
                border: `1px solid ${colors.border}`,
                borderRadius: '6px'
              }}
            >
              Completed
            </Button>
            <Button 
              onClick={() => handleFilterChange('To Do')}
              style={{ 
                backgroundColor: filter === 'To Do' ? '#a0aec0' : 'transparent',
                color: filter === 'To Do' ? 'white' : colors.textSecondary,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px'
              }}
            >
              To Do
            </Button>
            <Button 
              onClick={() => handleFilterChange('In Progress')}
              style={{ 
                backgroundColor: filter === 'In Progress' ? colors.warning : 'transparent',
                color: filter === 'In Progress' ? 'white' : colors.warning,
                border: `1px solid ${colors.border}`,
                borderRadius: '6px'
              }}
            >
              In Progress
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Table striped bordered hover responsive style={{ 
        backgroundColor: colors.cardBackground,
        border: `1px solid ${colors.border}`,
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f5f9' }}>
            <th style={{ color: colors.textPrimary }}>Title</th>
            <th style={{ color: colors.textPrimary }}>Description</th>
            <th style={{ color: colors.textPrimary }}>Status</th>
            <th style={{ color: colors.textPrimary }}>Priority</th>
            <th style={{ color: colors.textPrimary }}>Assigned To</th>
            <th style={{ color: colors.textPrimary }}>Due Date</th>
            <th style={{ color: colors.textPrimary }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id}>
              <td style={{ color: colors.textPrimary }}>{task.title}</td>
              <td style={{ color: colors.textSecondary }}>{task.description}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle 
                    variant="outline-secondary" 
                    size="sm"
                    style={{ 
                      backgroundColor: `${task.statusColor}20`, // 20% opacity
                      color: task.statusColor,
                      border: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    {task.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ 
                    border: `1px solid ${colors.border}`,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>
                    <Dropdown.Item onClick={() => handleStatusChange(task.id, 'To Do')}>To Do</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatusChange(task.id, 'In Progress')}>In Progress</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatusChange(task.id, 'Completed')}>Completed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
              <td>
                <Badge 
                  style={{ 
                    backgroundColor:'#f8f9fa', 
                    color: 'black',
                    padding: '0.35rem 0.75rem',
                    fontWeight: 500,
                    borderRadius: '4px',
                    border: 'none'
                  }}
                >
                  {task.priority}
                </Badge>
              </td>
              <td style={{ color: colors.textPrimary }}>{task.assignedTo}</td>
              <td style={{ color: colors.textSecondary }}>{task.dueDate}</td>
              <td>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={() => handleDeleteTask(task.id)}
                  style={{ 
                    borderColor: colors.danger,
                    color: colors.danger,
                    borderRadius: '4px',
                    backgroundColor: '#ffebee', // Soft red background
                    '&:hover': {
                            backgroundColor: '#ffcdd2' // Slightly darker on hover
                        }
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Create Task Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)} size="lg" centered>
        <Modal.Header 
          closeButton 
          style={{ 
            borderBottom: `1px solid ${colors.border}`,
            backgroundColor: colors.background
          }}
        >
          <Modal.Title style={{ color: colors.textPrimary }}>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: colors.background }}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: colors.textPrimary }}>Title</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter task title" 
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    style={{ 
                      backgroundColor: colors.cardBackground,
                      border: `1px solid ${colors.border}`,
                      color: colors.textPrimary
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: colors.textPrimary }}>Priority</Form.Label>
                  <Form.Select 
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                    style={{ 
                      backgroundColor: colors.cardBackground,
                      border: `1px solid ${colors.border}`,
                      color: colors.textPrimary
                    }}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: colors.textPrimary }}>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter task description"
                value={newTask.description}
                onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                style={{ 
                  backgroundColor: colors.cardBackground,
                  border: `1px solid ${colors.border}`,
                  color: colors.textPrimary
                }}
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: colors.textPrimary }}>Assigned To</Form.Label>
                  <Form.Select 
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({...newTask, assignedTo: e.target.value})}
                    style={{ 
                      backgroundColor: colors.cardBackground,
                      border: `1px solid ${colors.border}`,
                      color: colors.textPrimary
                    }}
                  >
                    <option value="">Select team member</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Sarah Smith">Sarah Smith</option>
                    <option value="Mike Johnson">Mike Johnson</option>
                    <option value="Emma Wilson">Emma Wilson</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: colors.textPrimary }}>Due Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                    style={{ 
                      backgroundColor: colors.cardBackground,
                      border: `1px solid ${colors.border}`,
                      color: colors.textPrimary
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ 
          borderTop: `1px solid ${colors.border}`,
          backgroundColor: colors.background
        }}>
          <Button 
            variant="outline-secondary" 
            onClick={() => setShowCreateModal(false)}
            style={{ 
              borderColor: colors.border,
              color: colors.textSecondary
            }}
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={handleCreateTask}
            style={{ 
              backgroundColor: colors.primary,
              border: 'none'
            }}
          >
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Tasks;