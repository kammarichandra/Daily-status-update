import React, { useContext } from 'react';
import { AuthContext } from './ContextApi';

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Employee Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email }</p>
      <p>Role: {user?.role }</p>
    </div>
  );
}

export default Profile;