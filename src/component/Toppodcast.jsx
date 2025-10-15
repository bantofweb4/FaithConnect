import './Toppodcast.css'
import {Link} from "react-router-dom"

function Toppodcast () {
   return (
    <>
      <div className="toppodcaster" >
        <div className="p-1" >
          <h1 className="text-[12px] " >TOP PODCASTERS</h1>    
        </div>
        <div className="podcasters " >
          <img src="img/profille.png" alt="" className="podcasterimg" />
          <div className="podName" >
            <div className="" >
              <h2 className="" >Joyce Meyer</h2> 
            </div>
            <div className="podName2 " >
              <div>
                <h1 className="follow" >2,045 followers</h1>
              </div>    
              <div className=" w-[40px] " ><h3 class=" text-[10px] text-center bg-[#ADC4F285] rounded-[12px] w-[40px]"  >+ follow</h3></div>
            </div>
          </div>      
        </div>

        <div className="podcasters " >
          <img src="img/profille.png" alt="" className="podcasterimg " /> 
          <div className="podName " >
            <div className="" >
              <h2 className="" >Joyce Meyer</h2> 
            </div>
            <div className="podName2 " >
              <h1 className="follow " >2,045 followers</h1>    
              <div className=" w-[40px] " ><h3 className=" text-[10px] text-center bg-[#ADC4F285] rounded-[12px] w-[40px]"  >+ follow</h3></div>
            </div>
          </div>        
        </div>

        <div className="podcasters " >
          <img src="img/profille.png" alt="" className="podcasterimg " /> 
          <div className="podName" >
            <div className="" >
              <h2 className="" >Joyce Meyer</h2> 
            </div>
            <div className="podName2" >
              <h1 className="follow" >2,045 followers</h1>    
              <div className=" w-[40px] " ><h3 className=" text-[10px] text-center bg-[#ADC4F285] rounded-[12px] w-[40px]"  >+ follow</h3></div>
            </div>
          </div>        
        </div>

        <div className="my-3" >
          <img src="img/podcast3.png" alt="" className="podcastimage" />    
        </div>
      </div>
    </>
  );
}

export default Toppodcast

