import './Podcastbox.css'
import {Link} from "react-router-dom"

function Podcastbox () {
   return (
    <>
      <div ClassName="podcastbox">
        <div ClassName="whitebox">
          <div ClassName="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16.85 18.58a9 9 0 1 0-9.7 0"/>
              <path d="M8 14a5 5 0 1 1 8 0"/>
              <circle cx="12" cy="11" r="1"/>
              <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/>
            </svg>
            <h2>Podcast</h2>
          </div>
          <p ClassName="subtitle">Listened to This Week</p>
          <div ClassName="bottom">
            <h1><b>54</b></h1>
            <div ClassName="bar"></div>
          </div>
        </div>

        <div ClassName="whitebox">
          <div ClassName="top">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16.85 18.58a9 9 0 1 0-9.7 0"/>
              <path d="M8 14a5 5 0 1 1 8 0"/>
              <circle cx="12" cy="11" r="1"/>
              <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/>
            </svg>
            <h2>Podcast</h2>
          </div>
          <p ClassName="subtitle">Listened to This Week</p>
          <div ClassName="bottom">
            <h1><b>54</b></h1>
            <div ClassName="bar"></div>
          </div>
        </div>

        <div ClassName="orangebox">
          <div ClassName="upcoming">
            <div ClassName="num">
              <h1>15</h1>
            </div>
            <p ClassName="small-text">Upcoming</p>
            <h1 ClassName="event">Event</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Podcastbox

