import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`, // Add your access token here
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          // Handle fetching user data failure
        }
      } catch (error) {
        // Handle network or other errors
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;
