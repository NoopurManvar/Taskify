import React, { useState } from 'react';
import { 
  Container, 
  Button, 
  Table, 
  Badge, 
  Alert
} from 'react-bootstrap';

const Trash = () => {
  // Mock deleted tasks data
  const initialDeletedTasks = [
    { 
      id: 5, 
      title: 'Old meeting notes', 
      description: 'Review and archive old meeting notes', 
      status: 'Completed', 
      priority: 'Low', 
      assignedTo: 'John Doe', 
      dueDate: '2023-05-20', 
      deletedDate: '2023-06-01' 
    },
    { 
      id: 6, 
      title: 'Deprecated feature', 
      description: 'Remove deprecated feature from codebase', 
      status: 'Completed', 
      priority: 'Medium', 
      assignedTo: 'Mike Johnson', 
      dueDate: '2023-05-15', 
      deletedDate: '2023-05-30' 
    },
  ];

  const [deletedTasks, setDeletedTasks] = useState(initialDeletedTasks);
  const [restoredTasks, setRestoredTasks] = useState([]);

  const handleRestoreTask = (taskId) => {
    const taskToRestore = deletedTasks.find(task => task.id === taskId);
    setRestoredTasks([...restoredTasks, taskId]);
    // In a real app, you would move this task back to the main tasks list
  };

  const handlePermanentDelete = (taskId) => {
    setDeletedTasks(deletedTasks.filter(task => task.id !== taskId));
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'primary';
      default: return 'secondary';
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Trash</h2>
      
      {restoredTasks.length > 0 && (
        <Alert variant="success" className="mb-4">
          Successfully restored {restoredTasks.length} task(s). They will be available in the main tasks list.
        </Alert>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Deleted Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deletedTasks.length > 0 ? (
            deletedTasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <Badge bg={getPriorityBadge(task.priority)}>
                    {task.priority}
                  </Badge>
                </td>
                <td>{task.assignedTo}</td>
                <td>{task.dueDate}</td>
                <td>{task.deletedDate}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button 
                      variant="success" 
                      size="sm" 
                      onClick={() => handleRestoreTask(task.id)}
                      disabled={restoredTasks.includes(task.id)}
                    >
                      Restore
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handlePermanentDelete(task.id)}
                    >
                      Delete Permanently
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No deleted tasks found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Trash;