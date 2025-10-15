import './Recent.css';

function Recent( ) {
    return (
        <>
            <div className="wholerecent">
                <div className="recently">
                    <h1 className="text-[12px] " >RECENTLY PLAYED</h1>
                    <div className="played " >
                        <div className="justify-items-center">
                            <img src="img/real loading.png" alt="" className="recentimg " /> 
                            <h3 class="recentt" >Holy Post Podcast</h3>   
                        </div>
                        <div  className="justify-items-center">
                            <img src="img/real loading.png" alt="" className="recentimg" /> 
                            <h3 className="recentt" >Holy Post Podcast</h3>   
                        </div>
                        <div className="justify-items-center">
                            <img src="img/stepping faith 3.png" alt="" className="recentimgg " />   
                            <h3 className="recentt" >Holy Post Podcast</h3> 
                        </div>
                        <div className="justify-items-center">
                            <img src="img/real loading.png" alt="" className="recentimg " /> 
                            <h3 className="recentt " >Holy Post Podcast</h3>   
                        </div>
                        <div className="justify-items-center">
                            <img src="img/real loading.png" alt="" className="recentimg" /> 
                            <h3 className="recentt " >Holy Post Podcast</h3>   
                        </div>
                        <div className="justify-items-center">
                            <img src="img/real loading.png" alt="" className="recentimg" /> 
                            <h3 className="recentt" >Holy Post Podcast</h3>   
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <h1 className="text-[12px]" >MOST POPULAR</h1>
                    <div className="grid">
                        <div className=" bg-[white] w-[200px] h-[50px] drop-shadow-lg rounded-[11px] ">
                            <div className="pop">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="ml-1 my-1 " >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className=" " >Stepping In Faith</h4>     
                                </div>     
                            </div>
                            <div className="pop ">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="poptext " >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className=" " >Stepping In Faith</h4>     
                                </div>     
                            </div>
                            <div className="pop ">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="poptext" >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className="" >Stepping In Faith</h4>     
                                </div>     
                            </div>
                        
                        </div>
                        <div className="mostpop">
                            <div className="pop">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="poptext" >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className=" " >Stepping In Faith</h4>     
                                </div>     
                            </div>
                            <div className="pop">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="poptext " >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className=" " >Stepping In Faith</h4>     
                                </div>     
                            </div>
                            <div className="pop">
                                <div>
                                    <img src="img/pod1.png" alt="" className="popimg" />    
                                </div>
                                <div className="poptext " >
                                    <h1 className=" " >What God joined tog... </h1> 
                                    <h4 className=" " >Stepping In Faith</h4>     
                                </div>     
                            </div>   
                        </div>                       
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Recent