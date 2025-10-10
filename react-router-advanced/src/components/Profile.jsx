import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'; // Import 'Link' and 'Outlet'

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      
      <nav>
        {/* Links for nested routes */}
        <ul>
          <li><Link to="profileDetails">Profile Details</Link></li>
          <li><Link to="profileSettings">Profile Settings</Link></li>
        </ul>
      </nav>

      {/* The Outlet will render the nested components (ProfileDetails or ProfileSettings) */}
      <Outlet />

       <Routes>
        <Route path="/profile/details" element={<ProfileDetails />} />
        <Route path="/profile/settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
