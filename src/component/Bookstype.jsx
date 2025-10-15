import './Bookstype.css'
import {Link} from "react-router-dom"

function Bookstype () {
   return (
    <>
        <div className="bookstype">
            <Link to="/kennbook">
                <div>
                    <img src="img/spritual.png" alt="" className="bookimg" />    
                    <h3 className="kenh3">Kenneth E. Hagin</h3>
                </div>    
            </Link>

            <Link to="/pilgrim">
                <div>
                    <img src="img/spritual.png" alt="" className="bookimg" />    
                    <h3 className="kenh3">The Pilgrim’s Progress</h3>
                </div>    
            </Link>

            <Link to="/adeboyepage">
                <div>
                    <img src="img/spritual.png" alt="" className="bookimg" />    
                    <h3 class="kenh3">Pastor E. A. Adeboye</h3>
                </div>    
            </Link>

            <Link to="/jamespage">
                <div>
                    <img src="img/spritual.png" alt="" className="bookimg" />    
                    <h3 className="kenh3">James S. Craige</h3>
                </div>    
            </Link>
        </div>
    </>
  );
}

export default Bookstype
