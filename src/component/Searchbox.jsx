import './Searchbox.css'
import {Link} from "react-router-dom"

function Searchbox () {
   return (
    <>
      <div className="searchbox">
        <div>
          <input type="text" placeholder="Search" className="searchh"></input>
        </div>

        <div className="">
          <h1 className="add">+ Add</h1>   
        </div>
      </div>
    </>
  );
}

export default Searchbox

