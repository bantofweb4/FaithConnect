import './About2.css'
import {Link} from "react-router-dom"

function About2 () {
   return (
    <>
        <div className="About2">
            <div className="bg-[#EEEEEE] h-50">
            <h1 className="abouttext ">About Us</h1>    
            </div>

            <div className="about3">
                <div>
                    <h3 className="abouth3">At Faith Connect, our heart's desire is to weave a tapestry of love, support, and spiritual growth, uniting believers from all walks of life in a vibrant community. We envision a platform where Christians can come together, deepen their faith, and uplift one another on their journey with God. Through meaningful connections, inspiring resources, and heartfelt community, we strive to strengthen the body of Christ, one relationship at a time</h3>
                </div>
                <div>
                    <img src="img/ABOUT US IMAGE.png" alt="" className="aboutimg" />
                </div>
            </div>
        </div>
    </>
  );
}

export default About2
