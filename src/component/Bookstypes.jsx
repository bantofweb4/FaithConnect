import './Bookstypes.css'
import {Link} from "react-router-dom"

function Bookstypes () {
   return (
    <>
        <div className="recommend-section">
            <h2>Book Recemendation</h2>
            <div className="book-grid">
                <Link to="/faithpage">
                    <div className="book-card">
                        <img src="img/openheaven.png" alt="" />    
                        <h3>Faith building stories</h3>
                    </div>
                </Link>

                <Link to="/frictionalpage">
                    <div className="book-card">
                        <img src="img/spritual.png" alt="" />    
                        <h3>Frictional</h3>
                    </div>
                </Link>

                <Link to="/NonFrictionalpage">
                    <div className="book-card">
                        <img src="img/spritual.png" alt="" />    
                        <h3>Non Frictional</h3>
                    </div>    
                </Link>

                <Link to="/childrenpage">
                    <div className="book-card">
                        <img src="img/spritual.png" alt="" />    
                        <h3>Children Books</h3>
                    </div>
                </Link>
            </div>    
        </div>
    </>
  );
}

export default Bookstypes
