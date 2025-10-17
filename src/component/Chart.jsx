import './Chart.css'
import {Link} from "react-router-dom"

function Chart () {
   return (
    <>
      <div className="charts">
        <div className="">
          <div className="totalusers">
            <div className="">
              <div className="num22">
                <h1 className="number22">22</h1>    
              </div>
              <p className="usertext">Offline <span className="px-[3px]">Users</span> </p>    
            </div>
            <div className="ml-5">
              <div className="">
                <h1 className="num22">22</h1>    
              </div>
              <p className="usertext">Online <span className="px-[3px]">Users</span> </p>    
            </div>
            <div className="usernum">
              <div className="flex">
                <h1 className="usernum2">5,750</h1> 
                <img src="img/cross.png" alt="" className="cross" />    
              </div>
              <p className="usertext2">Users Total<br /></p>    
            </div>
          </div>
          <div className="wholebar">
            <div className="">
              <div className="charttext">700</div>
              <div className="charttext">600</div>
              <div className="charttext">500</div>
              <div className="charttext">400</div>
              <div className="charttext">300</div>
              <div className="charttext">200</div>
              <div className="charttext">150</div>
            </div>

            <div className="bars">
              <div className="flex items-end gap-3 h-64">
                <div className="w-4">
                  <div className="bg-yellow-500 h-30"></div>
                  <p className="">10</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-44"></div>    
                  <p className="">20</p>
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-40"></div>
                  <p className="">40</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-48"></div>
                  <p className="">40</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-64"></div>
                  <p className="">50</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-32"></div>
                  <p className="">60</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-48"></div>
                  <p className="">70</p>    
                </div>
                <div classNsme="w-4">
                  <div className="bg-yellow-500 h-68"></div>
                  <p className="">80</p>    
                </div>
                <div className="w-4">
                  <div className="bg-yellow-500 h-75"></div>
                  <p className="">90</p>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart

