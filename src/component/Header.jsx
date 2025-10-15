import styles from './Header.css'


function Header() {
    return (
        <>
            <div className="grid-two-cols">
                <div>
                <h1 className='connecting'>Connecting <br/> Belivers<br/> Strenthning <br /> Faith</h1>
                </div>

                <div className="header-img">
                    <div className="headerimg2">
                        <div class="headerimg1-sub">
                            <div class="">
                                <img src="img/dark guy.png" alt="" />
                            </div>
                            <div class="">
                                <img src="img/darkman.png" alt="" />
                            </div>    
                        </div> 
                    </div>   
                    
                    <div className="headerimg2">
                        <div className="headerimg2-sub" >
                            <div class="">
                                <img src="img/darkwoman.png" alt=""/>
                            </div>
                            <div class="">
                                <img src="img/braidman.png" alt=""/>
                            </div>    
                        </div> 
                    </div>   

                    <div className="headerimg2">
                        <div className="headerimg3-sub">
                            <div class="">
                                <img src="img/glassman.png" alt=""/>
                            </div>
                            <div class="">
                                <img src="img/green.png" alt=""/>
                            </div>    
                        </div> 
                    </div>   
                </div>
            </div>
        </>
    );
}

export default Header