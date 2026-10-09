import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  user: { name: '', email: '', role: '' },
  setuser: () => {},
});

function ContextApi({ children }) {
  const [user, setuser] = useState({
    name: 'Chandra Shekar',
    email: 'chandra@example.com',
    role: 'Admin',
  });

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextApi;