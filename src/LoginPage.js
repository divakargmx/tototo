import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Login successful
        // Fetch user data
        const userDataResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`, // Add your access token here
          },
        });

        if (userDataResponse.ok) {
          const userData = await userDataResponse.json();
          // Store user data in state or global context if needed
          // Redirect to the dashboard route
          history.push('/dashboard');
        } else {
          // Handle fetching user data failure
        }
      } else {
        // Handle login failure
        // Display error message or take appropriate action
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
