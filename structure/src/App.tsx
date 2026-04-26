import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;