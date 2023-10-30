import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Data:</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
