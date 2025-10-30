import './Nav.css'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <>
        <nav>
            <Link to="/"><div className="Logo"><img src="img/logo.png" alt="" /></div></Link>
            <ul className="navul">
                <li className="navli" ><Link to="/podcast">Podcasts</Link></li>
                <li className="" ><Link to="/bookspage">Books</Link></li>
                <li className="" ><Link to="/Aboutpage">About</Link></li>
                <div className="signup-box">
                    <li className="Signupli" ><Link to="/mainsignup">Sign Up</Link></li>
                </div>
            </ul>
        </nav>
    </>
  );
}

export default Nav





