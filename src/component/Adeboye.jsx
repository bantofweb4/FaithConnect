import './Adeboye.css'
import {Link} from "react-router-dom"

function Adeboye() {
   return (
    <>
        <div className="kenn-section">
            <div className="kenn-flex">
                <div>
                    <h1>Ebooks</h1>
                    <h2>Book Recemendation</h2>
                    <h3>How to Be Led by the Spirit of God" tells the story of divine guidance, <br /> revealing how believers can hear God's voice, make Spirit-filled decisions, <br /> and live a purposeful, victorious Christian life daily.</h3>
                </div>
                <div className="author-kenn">
                    <img src="img/kenneth.png" alt="" />
                    <h2>Pastor E.A Adeboye <br /> Author</h2>
                </div>
            </div>
        </div>

    <div className="kennbook-grid">
        <a href="">
            <div className="kennbook-card">
                <img src="img/openheaven.png" alt="" />    
                <h3>Faith building stories</h3>
            </div>
        </a>
        <a href="">
            <div className="kennbook-card">
                <img src="img/spritual.png" alt="" />    
                <h3>Frictional</h3>
            </div>
        </a>
        <a href="">
            <div className="kennbook-card">
                <img src="img/spritual.png" alt="" />    
                <h3>Non Frictional</h3>
            </div>    
        </a>
        <a href="">
            <div className="kennbook-card">
                <img src="img/spritual.png" alt="" />    
                <h3>Children Books</h3>
            </div>
        </a>
    </div>

    </>
  );
}

export default Adeboye
