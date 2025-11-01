import React from "react";
import Nav from "../component/Nav";
import Books from "../component/Books";
import Ebooks from "../component/Ebooks"
import Footer from "../component/Footer";
import Bookstype from "../component/Bookstype";
import Bookstypes from "../component/Bookstypes";

function Bookspage() {
    return(
        <body className ="mx-[10px] font-outfit">
            <div id="background" className="w-full h-screen bg-no-repeat bg-center bg-cover z-0" >
                <Nav />
            </div>
            <Books />
            <Ebooks />
            <Bookstype />
            <Bookstypes />
            <Footer />   
        </body>
    ); 
}

export default Bookspage