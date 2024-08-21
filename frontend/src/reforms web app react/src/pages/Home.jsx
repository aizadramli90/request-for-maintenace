import React from 'react'


const Home = props => {
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
  <title>Request For Maintenance and Safety System: Login Page</title>
  {/* <nav>
<div class="custom-logo-container">
  <img src="./assets/eco-svgrepo-com.svg" alt="" srcset="" class="logo" />
  <a href="#">EcoGuardian</a>
</div>
<ul>
  <li><a class="custom-nav-link" href="#">Home</a></li>
  <li><a class="custom-nav-link" href="#">Job Status</a></li>
  <li><a class="custom-nav-link" href="#">Contact Us</a></li>
  <li><a class="custom-nav-link" href="#">Request</a></li>
</ul>
    </nav> */}
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
  <main className="custom-main-section" style={{ marginBottom: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text">
        Welcome To Request For Maintenance and Safety (REFORMS) System
      </h1>
    </div>
    {/* CAROUSEL */}
    {/* add carousel from bootstrap*/}
    <div
      className="alert alert-success"
      style={{ display: "block width: 70%" }}
    >
      <h2 className="custom-section-text" style={{ letterSpacing: "1.5px" }}>
        Our Mission
      </h2>
      {/*write about this website purpose
  1. to ease the process of maintenance request
  2. to provide a platform for user to check the status of their request
  3. to provide a platform for user to request for safety permit
  4. to provide a platform for user to check the status of their safety permit request
  5. to provide a platform for user to check the status of their safety permit request
  6. to notify area owner, head of department, and safety officer about the safety permit request
  7. to provide a platform for employee to report any unsafe act and unsafe condition
  */}
      <p style={{ lineHeight: "1.5", letterSpacing: 1 }}>
        This website is created to: <br />
        ✔️ Ease the process of maintenance request, <br />
        ✔️ To check the status of their request, <br />
        ✔️ Request for safety permit,
        <br />
        ✔️ Check the status of their safety permit request, <br />
        ✔️ Notify area owner, head of department, and safety officer about the
        safety permit request, and <br />
        ✔️ Provide a platform for employee to report any unsafe act and unsafe
        condition.
      </p>
    </div>
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-small"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="./assets/Checklist_small.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./assets/progress.svg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./assets/uauc_small.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-success"
          aria-hidden="true"
        />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-success"
          aria-hidden="true"
        />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </main>
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

Home.propTypes = {

}

export default Home
