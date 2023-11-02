import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/users/profile/${userId}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
