import { Routes, Route } from 'react-router-dom';
import FunctionalPage from './Pages/FunctionalPage_05-10-2026/FunctionalPage';
import ProfilePage from './Pages/ProfilePage_05-10-2026/ProfilePage';


function App() {
  return (
    <Routes>
      <Route path="/FunctionalPage" element={<FunctionalPage />} />
      <Route path="/ProfilePage" element={<ProfilePage  />} />
    </Routes>
  );
}

export default App;