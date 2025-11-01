import './Footer.css'

function Footer() {
    return(
        <>
            <div className="footer">
                <div className="">
                  <span className="quicklink">QUICK LINKS</span>
                    <ul className="links">
                        <li className="footer-li"><a href="">Podcast</a></li>
                        <li className="footer-li"><a href="">Books</a></li>
                        <li className="footer-li"><a href="">Quote</a></li>
                        <li className="footer-li"><a href="">Events</a></li>    
                    </ul>
                </div>

              <div className="mt-[-1.25rem]">
                  <img className="w-32" src="img/logo.png" alt=""/> 
                  <div className="mt-2">
                      <div className="flex">
                          <img src="img/—Pngtree—phone icon_5105607.png" alt="" className="phone"/>
                          <h2 className="footer-text">+234 0000011119</h2>
                      </div>
                        
                      <div className="flex">
                          <img src="img/location.png" alt="" className="location"/>
                          <h2 className="footer-text">Redemption City</h2>    
                      </div>
                  </div>
              </div>
            </div>

            <div className="copyright">
                <h2 className="text-2xl text-center "> &copy; 2025 Faith Connect</h2>
            </div>
        </>
    );
}

export default Footer