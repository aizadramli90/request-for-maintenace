import React from 'react'
import PropTypes from 'prop-types';
import styles from '../components/RequestForm.module.css';
import NavigationBar from '../components/NavigationBar';

const RequestForm = props => {
  return (
    <div>
      <>
  
  
  <title>Request For Maintenance and Safety System: Login Page</title>
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
      <a className="navbar-brand" href="#">
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
            <a className="nav-link active" href="#">
              Home
              <span className="visually-hidden">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./login.html">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
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
      <h1 className="custom-title-text">Maintenance Request Form</h1>
    </div>
    {/* LOGIN FORM */}
    <div
      className="custom-div-form"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15rem",
        width: "100%",
        height: "100%"
      }}
    >
      <form action="" className="custom-login-form">
        <div className="custom-login-form-div">
          <fieldset className="fieldset-username">
            <label htmlFor="department">Department </label>
            <select id="department" required="">
              <option value="admin_HR">Admin &amp; Human Resource</option>
              <option value="production">Production</option>
              <option value="lab_and_operation">Lab &amp; Operation</option>
              <option value="logistic">Logistic</option>
              <option value="dtp">DTP</option>
            </select>
          </fieldset>
          <fieldset className="fieldset-username">
            <label htmlFor="maintenance_type">Type of Maintenance</label>
            <select id="maintenance_type" required="">
              <option value="breakdown">Break Down</option>
              <option value="preventive">Preventive</option>
              <option value="asd">Annual Shut Down</option>
            </select>
          </fieldset>
          <fieldset className="fieldset-username">
            <label htmlFor="issued_to">Issued to</label>
            <select id="issued_to" required="">
              <option value="mechanical">Mechanical</option>
              <option value="electrical">Electrical</option>
              <option value="instrument">Instrument</option>
            </select>
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="title">Brief Description of Problem</label>
            <textarea
              name="message"
              rows={10}
              cols={30}
              placeholder="Describe your problem"
              defaultValue={""}
            />
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="description">Corrective Action</label>
            <textarea
              name="message"
              rows={10}
              cols={30}
              placeholder="Suggest corrective action"
              defaultValue={""}
            />
          </fieldset>
          <fieldset className="fieldset-password">
            <label htmlFor="description">Upload photo</label>
            <input type="file" id="myFile" name="filename" />
          </fieldset>
          <button id="submit">Submit</button>
        </div>
      </form>
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
</>

    </div>
  )
}

RequestForm.propTypes = {

}

export default RequestForm
