import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
    function handleLogin(event) {
  event.preventDefault();

  if (email === "") {
    setError("Email is required");
    return;
  }

  if (password === "") {
    setError("Password is required");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  setError("");

console.log("Login Successful");
console.log("Email:", email);
console.log("Password:", password);
navigate("/dashboard");
}
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Login to continue learning with EduRAG.</p>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;