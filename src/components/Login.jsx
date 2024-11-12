import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await login(email, password)

    if (result.success) {
      navigate('/')
    } else {
      alert(result.message)
    }
  }

  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <h2 className="auth_title">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="auth_input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="auth_input"
      />
      <button type="submit" className="auth_button">Login</button>
      <p className="auth_switchText">
        Don't have an account? 
        <span onClick={onSwitchToRegister} className="auth_switchLink">Register</span>
      </p>
    </form>
  );
};

export default LoginForm;
