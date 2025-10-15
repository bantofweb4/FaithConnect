import React from 'react';
import Sidebar from '../component/Sidebar';
import Blogsheader from '../component/Blogsheader';
import Blogshead from '../component/Blogshead';

function Blogspages() {
  return (
    <>
        <div className="flex">
            <Sidebar />
            <div className="w-[90vw]">
                <Blogsheader />
                <div className="flex">
                  <div>
                    <Blogshead />
                  </div>
                  <div>
                    
                  </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Blogspages