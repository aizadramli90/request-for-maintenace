import React from 'react'


const Register = props => {
  return (
    <div>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />
  <title>Registeration | REFORMS System</title>
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
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-sm-2"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <main className="custom-main-section">
    <div className="custom-title">
      <h1 className="custom-title-text">
        Request For Maintenance and Safety (REFORMS) System
      </h1>
    </div>
    {/* LOGIN FORM */}
    <div
      className="custom-main-login-carousel"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15rem"
      }}
    >
      <form action="" className="custom-login-form">
        <div className="custom-login-form-div">
          <fieldset className="fieldset-username">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              required=""
            />
          </fieldset>
          <fieldset className="fieldset-username">
            <label htmlFor="username">Email </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              required=""
            />
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              required=""
            />
          </fieldset>
          <button
            style={{
              marginTop: 50,
              borderRadius: 10,
              outline: "none",
              border: "none",
              height: 30
            }}
            id="register"
          >
            Register
          </button>
          {/* button id="login">Login</button> */}
        </div>
      </form>
      <div
        style={{
          backgroundColor: "#254336",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      />
    </div>
  </main>
  {/* CAROUSEL */}
  {/* FOOTER */}
  <footer>
    <div className="nav-footer">
      <a className="footer-link" href="#">
        Disclaimer
      </a>
      <a className="footer-link" href="#">
        Security Policy
      </a>
      <a className="footer-link" href="#">
        Sitemap
      </a>
    </div>
    <div className="details-footer">
      <p>Semenyih, Selangor Darul Ehsan</p>
      <p>Email: muhammadaizadr@gmail.com</p>
      <p>Tel: 6013-8804450</p>
      <p>© 2021 Aizad Ramli. All Rights Reserved.</p>
    </div>
  </footer>


    </div>
  )
}

Register.propTypes = {

}

export default Register
