import './Topuser.css'
import {Link} from "react-router-dom"

function Topuser () {
   return (
    <>
      <h1 className="toptext">Top Users</h1>
      <div className="topuser">
        <div className="top">
          <div className="flex">
            <div className="topinfo">
                <img src="img/user_image.png" alt="" className="topimg"/> 
                <div class="topinfo2">
                  <h3 className="text-sm">Sharon Blue</h3>
                  <p className="text-[10px] mt-[-3px] text-[#E9A923B2]">sharonblue@gmail.com</p>
                  <p class="text-[10px]">45%</p>      
                </div>
            </div>
          </div>

           <div className="flex">
            <div className="topinfo">
                <img src="img/user_image.png" alt="" className="topimg"/> 
                <div class="topinfo2">
                  <h3 className="text-sm">Sharon Blue</h3>
                  <p className="text-[10px] mt-[-3px] text-[#E9A923B2]">sharonblue@gmail.com</p>
                  <p class="text-[10px]">45%</p>      
                </div>
            </div>
          </div>

           <div className="flex">
            <div className="topinfo">
                <img src="img/user_image.png" alt="" className="topimg"/> 
                <div className="topinfo2">
                  <h3 className="text-sm">Sharon Blue</h3>
                  <p className="text-[10px] mt-[-3px] text-[#E9A923B2]">sharonblue@gmail.com</p>
                  <p class="text-[10px]">45%</p>      
                </div>
            </div>
          </div>

           <div className="flex">
            <div className="topinfo">
                <img src="img/user_image.png" alt="" className="topimg"/> 
                <div class="topinfo2">
                  <h3 className="text-sm">Sharon Blue</h3>
                  <p className="text-[10px] mt-[-3px] text-[#E9A923B2]">sharonblue@gmail.com</p>
                  <p className="text-[10px]">45%</p>      
                </div>
            </div>
          </div>
        </div>

        <div className="streak">
          <div className="flex">
            <div className="streak2">
              <div className="streakinfo">
                <div className="">
                    <div className="">
                      <h1 className="weeklyh1" >Weekly Streak</h1>
                    </div>
                    <hr className="hrline" />
                    <div className="" >
                      <div className="mt-[-6px]">
                        <h2 className="text-[12px]">4/4 Weeks</h2>    
                      </div>
                      <div className="flex gap-[4px] mt-[20px]">
                        <div className="datestreak">
                          <h1>Hey</h1>
                          <div>
                            
                            <h1>29</h1>
                            <h2>Thur</h2>
                          </div>    
                        </div>   
                        <div className="datestreak">
                          <h2 className="text-[10px]">May</h2>
                            <h1 className="h1date">29</h1>
                            <h2 className="text-[10px]">Thu</h2>    
                        </div>   
                        <div className="datestreak">
                          <h2 className="text-[10px]">May</h2>
                          <h1 className="h1date">29</h1>
                          <h2 className="text-[10px]">Thu</h2>    
                        </div>
                        <div className="datestreak2">
                          <h2 className="text-[10px]">May</h2>
                          <h1 className="h1date">29</h1>
                          <h2 className="daystext">Thu</h2>    
                        </div>
                        <div className="bg-[white] rounded-md w-[60px] h-[70px] text-center py-1 drop-shadow-lg">
                          <h2 className="text-[10px]">May</h2>
                          <h1 className="h1date">29</h1>
                          <h2 className="daystext">Thu</h2>    
                        </div>
                      </div>    
                    </div>
                </div>
              </div>  
                            
              <div className="inspiration">
                <div className="p-2">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open-text-icon lucide-book-open-text mr-1"><path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/><path d="M6 12h2"/><path d="M6 8h2"/></svg>
                    <a href="" className="underline">Daily Inspiration</a>    
                  </div>
                  <div className="pt-1">
                    <p>“This is the day that the Lord has made; Let us rejoice and be glad in it”</p>
                    <p className="flex justify-end text-[12px]">Psalm 118:24</p>
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topuser

