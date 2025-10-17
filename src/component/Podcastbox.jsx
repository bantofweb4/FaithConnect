import './Podcastbox.css'
import {Link} from "react-router-dom"

function Podcastbox () {
   return (
    <>
      <div className="podcastbox">
        <div className="whitebox">
          <div className="flex px-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-podcast-icon lucide-podcast"><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1"/><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/></svg>
            <h2 className="ml-1">Podcast</h2>    
          </div>

          <div className="px-2">
            <p className="text-[9.2px]">Listened to This Week</p>
          </div>

          <div className="flex justify-end mt-3">
            <h1 className="mr-3 text-xl"> <b>54</b></h1>
            <div className="w-[3px] h-7 bg-[#E9A923]"></div>    
          </div>
        </div>

        <div className="whitebox">
          <div className="flex px-2 pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-podcast-icon lucide-podcast"><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1"/><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/></svg>
            <h2 className="ml-1">Podcast</h2>    
          </div>

          <div className="px-2">
            <p className="text-[9.2px]">Listened to This Week</p>
          </div>

          <div className="flex justify-end mt-3">
            <h1 className="num54"> <b>54</b></h1>
            <div className="w-[3px] h-7 bg-[#E9A923]"></div>    
          </div>
        </div>

        <div className="orangebox">
          <div className="upcoming">
            <div className="num">
              <h1 className="num15">15</h1>
            </div>
            <div className="flex justify-end">
              <p className="text-[10px]">Upcoming</p>
            </div>
            <div className="flex justify-end">
              <h1 className="text-xl">Event</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcastbox

