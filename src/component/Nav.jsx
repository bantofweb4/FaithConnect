import './Nav.css'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <>
        <nav>
            <div className="Logo"><img src="img/logo.png" alt="" /></div>
            <ul className="flex gap-[40px] ">
                <li className="" ><Link to="/">Home</Link></li>
                <li className="" ><Link to="/podcast">Podcasts</Link></li>
                <li className="" ><Link to="/bookspage">Books</Link></li>
                <li className="" ><Link to="">Blogs</Link></li>
                <li className="" ><Link to="/Aboutpage">About</Link></li>
                <div className="bg-[#FFB825] rounded-tl-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-br-none h-[30px] w-[60px] mx-[20px] px-[20px]">
                    <li className="underline" ><a href="sign up.html">Sign Up</a></li>
                </div>
            </ul>
        </nav>
    </>
  );
}

export default Nav





