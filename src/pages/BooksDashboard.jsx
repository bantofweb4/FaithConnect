import React from 'react';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import BooksHeader from '../component/BooksHeader';
import Booksimg from '../component/Booksimg';
import Searchbooks from '../component/Searchbooks';
import Frictionalbook from '../component/Frictionalbook';
import Categories from '../component/categories';

function BooksDashboard() {
  return (
    <>
        <div className="flex">
            <Sidebar />
            <div className="w-[90vw]">
                <BooksHeader />
                <div className="flex">
                  <div>
                    <Booksimg />
                  </div>
                </div>
                 <Searchbooks />
                 <Frictionalbook />
                 <Categories />
            </div>
            
        </div>
    </>
  );
}

export default BooksDashboard