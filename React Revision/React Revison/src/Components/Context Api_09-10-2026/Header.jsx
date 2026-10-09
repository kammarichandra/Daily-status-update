import React, { useContext } from 'react';
import { AuthContext } from './ContextApi';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <h2>TeamSync</h2>
      <p>Welcome, {user?.name }!</p>
      <p>Role: {user?.role }</p>
    </header>
  );
}

export default Header;