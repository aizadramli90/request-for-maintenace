import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Optionally, redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="custom-logo-container">
            <img
              src="./assets/eco-svgrepo-com.svg"
              alt=""
              srcSet=""
              className="logo"
            />
          </div>
          <a className="navbar-brand" href="/">
            EcoGuardian
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/userdashboard">
                      My Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/request">
                      Submit Request
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">
                      Register
                    </a>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" style={{border: "1px solid #333333"}} onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                name='search'
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;