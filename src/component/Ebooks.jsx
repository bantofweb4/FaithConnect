import './Ebooks.css'
import {Link} from "react-router-dom"

function Ebooks () {
   return (
    <>
        <div className="ebooks">
          <div>
            <h1 className="ebooksh1">Ebooks</h1>
            <h2 className="ebooksh2">Book Recomendation</h2>
            <h3 className="ebooksh3">How to Be Led by the Spirit of God tells the story of divine guidance, <br/> revealing how believers can hear God's voice, make Spirit-filled decisions, <br/> and live a purposeful, victorious Christian life daily.</h3>
          </div>
          <div>
            <img src="img/kenneth.png" alt="" className="kenimg" />
            <h2 className="ebooksh3">Kenneth E. Hagin <br /> Author</h2>
          </div>
        </div>
    </>
  );
}

export default Ebooks
