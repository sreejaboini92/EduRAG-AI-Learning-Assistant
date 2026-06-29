import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>EduRAG</h2>

      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/chat">Chat</Link>

      <Link to="/quiz">Quiz</Link>

      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;