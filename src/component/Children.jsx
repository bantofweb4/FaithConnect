import './Children.css'
import {Link} from "react-router-dom"

function Children() {
   return (
    <>
        <h1>Children Books</h1>

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

export default Children
