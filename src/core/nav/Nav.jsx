import { Link } from "react-router-dom";
import "../nav/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img className="logo-hp" src="img/logo-hp.png" alt="logo-hp"></img>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/create">Create your character</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
