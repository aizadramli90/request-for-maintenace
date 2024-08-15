import React, { useEffect, useState } from 'react'


const Dashboard = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8686/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                console.log(json); // Log the JSON response
                setData(json.data); // Access the 'data' property of the JSON response
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);

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
            <a className="nav-link" href="./index.html">
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
  <main className="custom-main-section" style={{ marginBottom: 500 }}>
    <div className="custom-title">
      <h1 className="custom-title-text">My Dashboard</h1>
      {/* <table class="table table-striped table-hover">
    ...
  </table> */}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="fw-bold" scope="col">
              #
            </th>
            <th className="fw-bold" scope="col">
              Username
            </th>
            <th className="fw-bold" scope="col">
              Email
            </th>
            <th className="fw-bold" scope="col">
              Created At
            </th>
            <th className="fw-bold" scope="col">
              Updated At
            </th>
            <th className="fw-bold" scope="col">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
        {data.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{new Date(user.created_at).toLocaleString()}</td>
                    <td>{new Date(user.updated_at).toLocaleString()}</td>
                    <td>{user.is_admin ? 'Admin' : 'User'}</td>
                  </tr>
                ))}
        </tbody>
      </table>
    </div>
  
  </main>
 

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

Dashboard.propTypes = {

}

export default Dashboard;
