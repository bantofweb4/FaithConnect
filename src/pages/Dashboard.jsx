import React from 'react';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import Dashboardheader from '../component/Dashboardheader';
import Podcastbox from '../component/Podcastbox';
import Searchox from '../component/Searchbox';
import Topuser from '../component/Topuser';
import Chart from '../component/Chart';

function Dashboard() {
  return (
    <>
        <div className="flex">
            <Sidebar />
            <div className="w-[90vw]">
                <Dashboardheader />
                <div className="flex">
                  <div>
                    <Podcastbox />
                    <Searchox />
                    <Topuser />
                  </div>
                  <div>
                    <Chart />
                  </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Dashboard