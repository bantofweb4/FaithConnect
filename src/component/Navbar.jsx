import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
        <nav className="navbar02">
            <div className="logo02">
                <img src="img/logo.png" alt="Logo" />
            </div>

            <ul className="nav-links">
                <li>
                <Link to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </Link>
                </li>
                <li>
                <Link to="/podcast" className={({ isActive }) => (isActive ? "active" : "")}>
                    Podcast
                </Link>
                </li>
                <li>
                <Link to="/bookspage" className={({ isActive }) => (isActive ? "active" : "")}>
                    Books
                </Link>
                </li>
                <li>
                <Link to="/aboutpage" className={({ isActive }) => (isActive ? "active" : "")}>
                    About
                </Link>
                </li>
                <li className="signup-box02">
                <Link to="/mainsignup">Sign Up</Link>
                </li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar





