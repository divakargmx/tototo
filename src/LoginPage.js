import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful
        const userResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/me', {
          headers: {
            'Authorization': `Bearer ${response.token}`, // Assuming the backend returns a token upon successful login
          },
        });

        if (userResponse.ok) {
          const user = await userResponse.json();
          // Save user information to local storage or state as needed

          // Redirect to the dashboard after successful login
          history.push('/dashboard');
        } else {
          // Handle error when fetching user information
          console.log('Error fetching user information');
        }
      } else {
        // Handle error for unsuccessful login
        console.log('Login failed');
      }
    } catch (error) {
      // Handle any other errors
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
