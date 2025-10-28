import './Nav.css'
import {Link} from "react-router-dom"

function Nav() {
  return (
    <>
        <nav>
            <Link to="/"><div className="Logo"><img src="img/logo.png" alt="" /></div></Link>
            <ul className="flex gap-[40px] ">
                <li className="" ><Link to="/podcast">Podcasts</Link></li>
                <li className="" ><Link to="/bookspage">Books</Link></li>
                <li className="" ><Link to="/Aboutpage">About</Link></li>
                <div className="bg-[#FFB825] rounded-tl-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-br-none h-[30px] w-[60px] mx-[20px] px-[20px]">
                    <li className="underline" ><Link to="/mainsignup">Sign Up</Link></li>
                </div>
            </ul>
        </nav>
    </>
  );
}

export default Nav





