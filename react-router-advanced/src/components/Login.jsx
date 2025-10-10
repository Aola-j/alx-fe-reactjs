import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a login action by setting an "authenticated" flag in localStorage
    localStorage.setItem('authenticated', 'true');
    navigate('/profile'); // Redirect to the profile page after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
