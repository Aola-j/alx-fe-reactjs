// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

useAuth
const isAuthenticated = () => {
  // Simulating an authentication check (replace with actual logic)
  return localStorage.getItem('authenticated') === 'true';
};

function ProtectedRoute({ component: Component }) {
  return isAuthenticated() ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
