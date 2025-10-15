import './Categories.css'


function Categories( ) {
    return (
        <>
            <div className="wholecategories">
                <div className="Categories">
                    <div>
                        <h2>Trending Authors</h2>
                    </div> 
                    <hr />
                    <div className="category1">
                        <div>
                            <img src="img/AuthorEA.png" alt="" className="AuthorEA"/> 
                        </div>
                        <div className='minicategory'>
                            <div>
                                <h2 className="h3">E.A Adeboye</h2> 
                            </div>
                            <div className="mincategory">
                                <h5>115 Books</h5>
                                <h5>115 Subscribers</h5>
                            </div>
                        </div>
                    </div>

                    <div className="category2">
                        <div>
                            <img src="img/AuthorEA.png" alt="" className="AuthorEA"/> 
                        </div>
                        <div className='minicategory'>
                            <div>
                                <h2 className="h3">E.A Adeboye</h2> 
                            </div>
                            <div className="mincategory">
                                <h5>115 Books</h5>
                                <h5>115 Subscribers</h5>
                            </div>
                        </div>
                    </div>
                </div>   

                <div className="Categories">
                    <div>
                        <h2>Popular Reads</h2>
                    </div> 
                    <hr />
                    <div className="category3">
                        <div>
                            <img src="../img/nonfriction/img2.png"  alt=""  className="images2" />
                        </div>
                        <div className='minicategory1'>
                            <div>
                                <p className="popparagrph">The story of a warrior’s journey to faith, revealing how God’s love transforms pride, pain, and doubt into purpose and redemption.</p> 
                            </div>
                            <div className="">
                               
                            </div>
                        </div>
                    </div>
                    <div className="category4">
                        <div>
                            <img src="../img/nonfriction/img2.png"  alt=""  className="images2" />
                        </div>
                        <div className='minicategory1'>
                            <div>
                                <p className="popparagrph">The story of a warrior’s journey to faith, revealing how God’s love transforms pride, pain, and doubt into purpose and redemption.</p> 
                            </div>
                            <div className="">
                               
                            </div>
                        </div>
                    </div>
                </div>    

                <div className="Categories">
                    <div>
                        <h2>Book of the week</h2>
                    </div> 
                     <hr />
                    <div className="category5">
                        <div>
                            <img src="../img/joseph.png"  alt=""  className="josephimg" />
                        </div>
                        <div className="minicategory2">
                            <spam className="spam">The Days of Joseph by Noble, John</spam>
                            <p className="josephpara">When two of his brothers launch a vicious raid on the city to rescue Dinah, Joseph’s world is plunged into chaos. And as news of the treacherous attack spreads, his family find themselves hemmed in by enemies on every side.</p>
                        </div>

                    </div>
                </div>       
            </div> 
            
        </>
    );
}

export default Categories