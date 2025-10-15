import './Faith.css'
import {Link} from "react-router-dom"

function Faith() {
   return (
    <>
        <h1>Faith <br /> building stories</h1>

        <div className="story-section">
            <img src="img/100prayer.png" alt="" />
            <h2>100 Prayer Points, Volume 4 <br /> by <b>E.A. Adeboye</b></h2>
        </div>

        <div class="story-section second">
            <img src="img/soar.png" alt="" />
            <h2>Soar by <b>T. D. Jakes</b></h2>
        </div>
    </>
  );
}

export default Faith
