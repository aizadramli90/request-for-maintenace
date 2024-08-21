import React from 'react'


const Contact = props => {
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
  <main className="custom-main-section" style={{ height: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text" style={{margin: '32px auto'}}>Contact</h1>
      <div style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.724340676933!2d101.86782727584448!3d2.895582154657242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce7e8a4c1095%3A0x5252b568fbd8cc22!2sSemenyih%20Parklands!5e0!3m2!1sms!2smy!4v1724252867581!5m2!1sms!2smy"
  width={400}
  height={300}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      <p>
        Muhammad Aizad Ramli
        <br />
        Semenyih, Selangor Darul Ehsan
        <br />
        Email: muhammadaizadr@gmail.com
        <br />
        Tel: 6013-8804450

      </p>
      </div>
      
    </div>
    {/* LOGIN FORM */}
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



export default Contact
