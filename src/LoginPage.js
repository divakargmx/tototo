import React, { useState } from 'react';

function LoginPage({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        const userResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:BPMn1_6B/auth/me', {
          headers: {
            'Authorization': `Bearer ${response.token}`,
          },
        });

        if (userResponse.ok) {
          const user = await userResponse.json();
          // Save user information to local storage or state as needed

          // Redirect to the dashboard after successful login
          history.push('/dashboard');
        } else {
          console.log('Error fetching user information');
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
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
