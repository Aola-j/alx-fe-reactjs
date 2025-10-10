import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/PrivateRoute'; // Import the ProtectedRoute component
import Profile from './components/Profile'; // Import Profile component
import Login from './components/Login'; // Import Login component
import Post from './components/BlogPost'; // Import Post component for dynamic routing
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route for Profile */}
        <Route path="/profile" element={<ProtectedRoute component={Profile} />}>
         <Route path="profileDetails" element={<ProfileDetails />} />
          <Route path="profileSettings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route for Posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Default Route */}
        <Route path="/" element={<h1>Welcome to the App</h1>} />
       
      </Routes>
    </Router>
  );
}

export default App;
