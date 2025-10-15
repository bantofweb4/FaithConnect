import './Searchbooks.css'
import {Link} from "react-router-dom"

function Searchbooks () {
   return (
    <>
      <div className="searchbox">
        <div>
          <input type="text" placeholder="Search" className="searchh"></input>
        </div>
      </div>
    </>
  );
}

export default Searchbooks

