import React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from '../components/NavigationBar';


const RequestForm = props => {
  return (
    <div>
      
  
  <title>Request For Maintenance and Safety System: Login Page</title>
  <NavigationBar />
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


    </div>
  )
}

RequestForm.propTypes = {

}

export default RequestForm
