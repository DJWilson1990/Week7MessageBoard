import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/post">
        Post
      </Link>
      <Link className="nav-link" to="/messages">
        Messages
      </Link>
      <Link className="nav-link" to="/login">
        Log In
      </Link>
    </nav>
  );
}
