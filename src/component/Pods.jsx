import './Pods.css'
import {Link} from "react-router-dom" 

function Pods( ) {
    return (
        <>
            <Link to="/Steppingpage">
                <div className="pods-container">
                    <img src="img/stepping.png" alt="" className="w-50" />
                    <div className="pods-paragraph">
                        <h2 className="text-2xl">Stepping In Faith</h2>
                        <h3>Description <br/> Join us each week to deepen your walk with Jesus as we dive into the heart of faith, love, and relationships from a Christian perspective. Whether you're married, single, or navigating the challenges of life, our episodes focus on building intimate relationships with Jesus Christ, strengthening marriages, providing guidance for singles, and fostering healthy, God-centered connections.</h3>    
                    </div>
                </div>    
            </Link>

            <Link to="/christainpage" >
                <div className="pods-container">
                    <img src="img/podcastt.png" alt="" className="w-50" />
                    <div className="pods-paragraph">
                        <h2 className="text-2xl">A Christian Podcast with Kevin Wilson</h2>
                        <h3>Description <br/> Join us each week to deepen your walk with Jesus as we dive into the heart of faith, love, and relationships from a Christian perspective. Whether you're married, single, or navigating the challenges of life, our episodes focus on building intimate relationships with Jesus Christ, strengthening marriages, providing guidance for singles, and fostering healthy, God-centered connections.</h3>    
                    </div>
                </div>    
            </Link>

            <Link to="/projectpage">
                <div className="pods-container">
                    <img src="img/bibleproject.png" alt="" className="w-50" />
                    <div className="pods-paragraph">
                        <h2 className="text-2xl">Bible Project</h2>
                        <h3>Description <br/> The creators of BibleProject have in-depth conversations about the Bible and theology. A companion podcast to BibleProject videos found at bibleproject.com</h3>    
                    </div>  
                </div>
            </Link>
        </>
    );
}

export default Pods