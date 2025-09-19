import React, { useEffect, useState } from 'react';
import './spinkit.css';

function UserProfiles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Loading users...</h3>
      <div className="spinner"></div>
    </div>
  );
}

  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Profiles</h2>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card h-100">
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`}
                alt={user.username}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'contain', background: '#f8f9fa' }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Phone:</strong> {user.phone} <br />
                  <strong>Address:</strong> {user.address.street}, {user.address.city} <br />
                  <strong>Website:</strong> {user.website} <br />
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfiles;
