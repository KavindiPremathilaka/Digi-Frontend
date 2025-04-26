// Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      try {
        const res = await fetch('http://localhost:5000/api/auth/profile', {
          headers: {
            'x-auth-token': token,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data);
        } else {
          alert(data.msg || 'Failed to fetch user data');
        }
      } catch (err) {
        console.error('Profile fetch error:', err);
        alert('Something went wrong');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="form-container">
      <h2>Profile Info</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>

      <button style={{ marginTop: '20px', color: 'white', backgroundColor: 'blue', borderRadius: '5px', padding: '10px 20px' }}>
        <a href='/shop' style={{ color: 'white', textDecoration: 'none' }}>Shop</a>
      </button>

      <button
        onClick={handleLogout}
        style={{ marginTop: '20px', marginLeft: '10px', color: 'white', backgroundColor: 'red', borderRadius: '5px', padding: '10px 20px' }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;