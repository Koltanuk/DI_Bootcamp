import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  const HomeScreen = () => {
    return <h1>Home</h1>;
  };

  const ProfileScreen = () => {
    return <h1>Profile</h1>;
  };

  const ShopScreen = () => {
    throw new Error('An error occurred in the Shop page!');
  };

  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
