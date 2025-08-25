import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HospitalRegistration from './components/HospitalRegistration';
import IndividualRegistration from './components/IndividualRegistration';
import LoadingScreen from './components/LoadingScreen';
import HospitalDashboard from './components/HospitalDashboard';
import DonorRecipientApp from './components/DonorRecipientApp';
import { User, UserRole } from './types';

// Wrapper component to handle navigation
function AuthRoutes({ user, handleLogin }: { user: User | null; handleLogin: (user: User) => void }) {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* Landing and Authentication Routes */}
      <Route 
        path="landing" 
        element={
          user ? (
            <Navigate to={getDashboardRoute(user.role)} replace />
          ) : (
            <LandingPage onSelectUserType={(type) => {
              if (type === 'hospital') {
                navigate('/auth/hospital');
              } else {
                navigate('/auth/individual');
              }
            }} />
          )
        } 
      />
      
      <Route 
        path="hospital" 
        element={
          user ? (
            <Navigate to={getDashboardRoute(user.role)} replace />
          ) : (
            <HospitalRegistration 
              onLogin={handleLogin} 
              onBack={() => navigate('/auth/landing')}
            />
          )
        } 
      />
      
      <Route 
        path="individual" 
        element={
          user ? (
            <Navigate to={getDashboardRoute(user.role)} replace />
          ) : (
            <IndividualRegistration 
              onLogin={handleLogin} 
              onBack={() => navigate('/auth/landing')}
            />
          )
        } 
      />
    </Routes>
  );
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Authentication Routes */}
          <Route 
            path="/auth/*" 
            element={<AuthRoutes user={user} handleLogin={handleLogin} />} 
          />

          {/* Application Routes */}
          <Route 
            path="/hospital/*" 
            element={
              user && user.role === 'hospital_staff' ? (
                <HospitalDashboard user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/auth/landing" replace />
              )
            } 
          />
          
          <Route 
            path="/individual/*" 
            element={
              user && user.role === 'individual' ? (
                <DonorRecipientApp user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/auth/landing" replace />
              )
            } 
          />
          
          {/* Legacy routes for backward compatibility */}
          <Route 
            path="/login" 
            element={<Navigate to="/auth/landing" replace />} 
          />
          
          <Route 
            path="/donor/*" 
            element={<Navigate to="/individual" replace />} 
          />
          
          <Route 
            path="/recipient/*" 
            element={<Navigate to="/individual" replace />} 
          />
          
          <Route 
            path="/" 
            element={
              user ? (
                <Navigate to={getDashboardRoute(user.role)} replace />
              ) : (
                <Navigate to="/auth/landing" replace />
              )
            } 
          />

          {/* Catch-all route for unmatched paths */}
          <Route 
            path="*" 
            element={
              user ? (
                <Navigate to={getDashboardRoute(user.role)} replace />
              ) : (
                <Navigate to="/auth/landing" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

function getDashboardRoute(role: UserRole): string {
  switch (role) {
    case 'hospital_staff':
      return '/hospital';
    case 'individual':
      return '/individual';
    default:
      return '/auth/landing';
  }
}

export default App;