import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Dashboard = ({ user }) => {
  const stats = [
    { title: 'Total Tasks', value: 24, bg: '#eef2ff', text: '#4a6bff' },
    { title: 'Completed', value: 12, bg: '#f0f8ff', text: '#00a3cc' },
    { title: 'In Progress', value: 6, bg: '#fff0f5', text: '#cc6699' },
    { title: 'High Priority', value: 4, bg: '#fff4e6', text: '#cc7a00' }
  ];

  const recentTasks = [
    { title: 'Complete project proposal', status: 'In Progress', statusColor: '#cc7a00' },
    { title: 'Review team performance', status: 'Completed', statusColor: '#00a3cc' },
    { title: 'Fix critical bug', status: 'High Priority', statusColor: '#cc0033' }
  ];

  const teamActivities = [
    'John completed "Update documentation"',
    'Sarah assigned a new task to you',
    'Mike created a new team "Marketing"'
  ];

  return (
    <Container 
      className="dashboard-container"
      style={{ 
        backgroundColor: '#fafafc', 
        minHeight: '100vh',
        padding: '2rem 0'
      }}
    >
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#2d2d32', fontWeight: 600 }}>Welcome back, {user?.name}</h2>
        <p style={{ color: '#6a6a70', marginBottom: 0 }}>Here's what's happening with your tasks today.</p>
      </div>
      
      <Row className="g-4" style={{ marginBottom: '2rem' }}>
        {stats.map((stat, index) => (
          <Col md={3} key={index}>
            <Card 
              className="stat-card"
              style={{ 
                backgroundColor: stat.bg,
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Card.Body className="text-center" style={{ padding: '1.5rem' }}>
                <Card.Title 
                  style={{ 
                    color: stat.text,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}
                >
                  {stat.title}
                </Card.Title>
                <Card.Text 
                  style={{ 
                    color: stat.text,
                    fontSize: '2rem',
                    fontWeight: 700,
                    margin: 0
                  }}
                >
                  {stat.value}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card 
            className="recent-tasks-card"
            style={{ 
              backgroundColor: '#ffffff',
              border: '1px solid #e8e8ed',
              borderRadius: '12px',
              height: '100%'
            }}
          >
            <Card.Header 
              style={{ 
                backgroundColor: 'transparent',
                borderBottom: '1px solid #e8e8ed',
                fontWeight: 600,
                color: '#3a3a40',
                padding: '1.25rem'
              }}
            >
              Recent Tasks
            </Card.Header>
            <Card.Body style={{ padding: 0 }}>
              <ul className="list-group list-group-flush">
                {recentTasks.map((task, index) => (
                  <li 
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: '#f0f0f5',
                      padding: '1rem 1.25rem'
                    }}
                  >
                    <span style={{ color: '#4a4a4f' }}>{task.title}</span>
                    <span 
                      className="badge rounded-pill"
                      style={{ 
                        backgroundColor: `${task.statusColor}15`, // 15% opacity
                        color: task.statusColor,
                        padding: '0.35rem 0.75rem',
                        fontWeight: 500
                      }}
                    >
                      {task.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card 
            style={{ 
              backgroundColor: '#ffffff',
              border: '1px solid #e8e8ed',
              borderRadius: '12px',
              height: '100%'
            }}
          >
            <Card.Header 
              style={{ 
                backgroundColor: 'transparent',
                borderBottom: '1px solid #e8e8ed',
                fontWeight: 600,
                color: '#3a3a40',
                padding: '1.25rem'
              }}
            >
              Team Activity
            </Card.Header>
            <Card.Body style={{ padding: 0 }}>
              <ul className="list-group list-group-flush">
                {teamActivities.map((activity, index) => (
                  <li 
                    key={index}
                    className="list-group-item"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: '#f0f0f5',
                      padding: '1rem 1.25rem',
                      color: '#4a4a4f'
                    }}
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


// import React, { useState } from 'react';

// export default function Dashboard() {
//   // Mock user data
//   const user = {
//     name: "Admin User",
//     email: "admin@example.com",
//     role: "admin"
//   };

//   // Mock statistics data
//   const stats = [
//     { title: 'Total Tasks', value: 24, icon: 'clipboard-list' },
//     { title: 'Completed', value: 12, icon: 'check-circle' },
//     { title: 'In Progress', value: 6, icon: 'clock' },
//     { title: 'High Priority', value: 4, icon: 'exclamation' }
//   ];

//   // Mock recent tasks data
//   const recentTasks = [
//     { title: 'Complete project proposal', status: 'In Progress', statusColor: 'bg-amber-100 text-amber-800' },
//     { title: 'Review team performance', status: 'Completed', statusColor: 'bg-blue-100 text-blue-800' },
//     { title: 'Fix critical bug', status: 'High Priority', statusColor: 'bg-rose-100 text-rose-800' }
//   ];

//   // Mock team activities data
//   const teamActivities = [
//     { user: 'John', action: 'completed', item: 'Update documentation', time: '2 hours ago' },
//     { user: 'Sarah', action: 'assigned a new task to you', item: '', time: '4 hours ago' },
//     { user: 'Mike', action: 'created a new team', item: 'Marketing', time: 'Yesterday' }
//   ];

//   // Mock navigation
//   const navigation = [
//     { name: 'Dashboard', current: true },
//     { name: 'Tasks', current: false },
//     { name: 'Teams', current: false },
//     { name: 'Settings', current: false }
//   ];
  
//   const [isOpen, setIsOpen] = useState(false);

//   // Status icons mapping
//   const statusIcons = {
//     'In Progress': (
//       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//     'Completed': (
//       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//       </svg>
//     ),
//     'High Priority': (
//       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//       </svg>
//     )
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 <span className="text-indigo-600 font-bold text-xl">TaskifyPro</span>
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href="#"
//                     className={`${
//                       item.current
//                         ? 'border-indigo-500 text-gray-900'
//                         : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                     } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:items-center">
//               <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                 </svg>
//               </button>

//               {/* Profile dropdown */}
//               <div className="ml-3 relative">
//                 <div>
//                   <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100">
//                       <span className="text-sm font-medium leading-none text-indigo-700">
//                         {user.name.charAt(0)}
//                       </span>
//                     </span>
//                     <span className="ml-2 text-gray-700">{user.name}</span>
//                     <svg className="ml-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
//                 </div>
//                 {isOpen && (
//                   <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
//                     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Page header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user.name}</h1>
//           <p className="mt-1 text-sm text-gray-500">Here's what's happening with your tasks today.</p>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
//           {stats.map((stat) => (
//             <div
//               key={stat.title}
//               className="bg-white overflow-hidden shadow rounded-lg"
//             >
//               <div className="px-4 py-5 sm:p-6">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 bg-indigo-50 rounded-md p-3">
//                     <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                     </svg>
//                   </div>
//                   <div className="ml-5 w-0 flex-1">
//                     <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
//                     <dd className="flex items-baseline">
//                       <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
//                     </dd>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Content area */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//           {/* Recent Tasks */}
//           <div className="bg-white shadow rounded-lg">
//             <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Tasks</h3>
//                 <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</button>
//               </div>
//             </div>
//             <ul className="divide-y divide-gray-200">
//               {recentTasks.map((task, index) => (
//                 <li key={index}>
//                   <div className="px-4 py-4 sm:px-6">
//                     <div className="flex items-center justify-between">
//                       <p className="text-sm font-medium text-gray-900 truncate">{task.title}</p>
//                       <div className="ml-2 flex-shrink-0 flex">
//                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.statusColor}`}>
//                           <span className="flex items-center">
//                             {statusIcons[task.status]}
//                             <span className="ml-1">{task.status}</span>
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
//               <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
//                 Add New Task
//               </button>
//             </div>
//           </div>

//           {/* Team Activity */}
//           <div className="bg-white shadow rounded-lg">
//             <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">Team Activity</h3>
//             </div>
//             <ul className="divide-y divide-gray-200">
//               {teamActivities.map((activity, index) => (
//                 <li key={index} className="px-4 py-4 sm:px-6">
//                   <div className="flex space-x-3">
//                     <div className="flex-shrink-0">
//                       <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
//                         <span className="text-sm font-medium leading-none text-gray-700">
//                           {activity.user.charAt(0)}
//                         </span>
//                       </span>
//                     </div>
//                     <div className="min-w-0 flex-1">
//                       <p className="text-sm text-gray-800">
//                         <span className="font-medium">{activity.user}</span>{' '}
//                         <span>{activity.action}</span>
//                         {activity.item && <span className="font-medium"> "{activity.item}"</span>}
//                       </p>
//                       <p className="text-sm text-gray-500">{activity.time}</p>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }