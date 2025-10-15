import './Navcopy.css'
import {Link} from "react-router-dom"

function Navcopy() {
  return (
    <>
        <nav className="Navcopy">
            <div className="Logo"><Link><img src="img/logo.png" alt="" /></Link></div>
            <ul className="flex gap-[40px] ">
                <li className="" ><Link to="/podcast">Podcasts</Link></li>
                <li className="" ><Link to="/bookspage">Books</Link></li>
                <li className="" ><a href="">Events</a></li>
                <li className="" ><Link to="/Aboutpage">About</Link></li>
            </ul>
        </nav>
    </>
  );
}

export default Navcopy





