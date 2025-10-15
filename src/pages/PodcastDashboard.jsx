import React from 'react';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import Podcastheaderr from '../component/Podcastheaderr';
import Podcastbox from '../component/Podcastbox';
import Searchox from '../component/Searchbox';
import Topuser from '../component/Topuser';
import Chart from '../component/Chart';
import Joinpod from '../component/Joinpod';
import Recent from '../component/Recent';
import Toppodcast from '../component/Toppodcast';

function PodcastDashboard() {
  return (
    <>
        

        <div className="flex">
            <Sidebar />
            <div className="w-[90vw]">
                <Podcastheaderr />
                <Joinpod />
                <div className="flex">
                  <div>
                    <Searchox />
                    <Recent />
                  </div>
                  <div>
                    <Toppodcast />
                  </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default PodcastDashboard