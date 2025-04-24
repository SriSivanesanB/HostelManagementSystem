import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  const appStyle = {
    position: 'relative',
    color: 'black',
    minHeight: '100vh',
    fontFamily: 'DM Sans, sans-serif',
    minHeight: '100vh',fontFamily: 'DM Sans , sans-serif',
  };
  
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/assets/images/Login_BG.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    filter: 'blur(150px)',
    zIndex: -2,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  return (
    <div style={appStyle}>
      <div style={backgroundStyle}></div> {/* Blurred background */}
      <div style={overlayStyle}></div> {/* Semi-transparent white overlay */}
        <div style={contentStyle}>
          <Router>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;
