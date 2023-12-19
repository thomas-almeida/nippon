import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './assets/main.css';
import App from './App';
import Login from './Login';

const isUserLoggedIn = () => {
  return false;
};

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isUserLoggedIn() ? <App /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
