import React from 'react';
import axios from 'axios';

const Logout = () => {
;

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users/logout');
      console.log(response.data); // Handle the response as needed

      // Clear the token from local storage
      localStorage.removeItem('token');



      // Add any additional code for UI updates or redirection here
    } catch (error) {
      console.error(error); // Handle errors appropriately
    }
  };

  return (
    <div>
      <h1>User Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
