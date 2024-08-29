import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8686/admin/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json); // Log the JSON response
        setData(json.data); // Access the 'data' property of the JSON response
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar />
      <main className="custom-main-section" style={{ marginBottom: 500 }}>
        <div className="custom-title">
          <h1 className="custom-title-text">Admin Dashboard</h1>
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
  );
};

AdminDashboard.propTypes = {};

export default AdminDashboard;