import './Frictional.css'
import {Link} from "react-router-dom"

function Frictional() {
   return (
    <>
        <h1>Frictional Stories</h1>

        <div className="book-section">
            <img src="img/elijah.png" alt="" />
            <h2>The Days of Elijah <br />by <b>Nobel, John</b></h2>
        </div>

        <div className="book-section large">
            <img src="img/soar.png" alt="" />
            <h2>Love comes softly <br /> by <b>Janette Oke</b></h2>
        </div>

        <div className="book-section">
            <img src="img/elijah.png" alt="" />
            <h2>The Days of Elijah <br />by <b>Nobel, John</b></h2>
        </div>

        <div className="book-section large">
            <img src="img/soar.png" alt="" />
            <h2>Love comes softly <br /> by <b>Janette Oke</b></h2>
        </div>
    </>
  );
}

export default Frictional
