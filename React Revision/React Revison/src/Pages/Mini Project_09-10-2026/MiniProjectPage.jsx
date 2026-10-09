import React from 'react';
import Emp from '../../Components/Mini Project_09-10-2026/Emp';
import { AuthProvider } from '../../Components/Mini Project_09-10-2026/Context/AuthContext';

function MiniProjectPage() {
  return (
    <AuthProvider>
      <Emp />
    </AuthProvider>
  );
}

export default MiniProjectPage;