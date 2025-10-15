import React from "react";
import Nav from "../component/Nav";
import Books from "../component/Books";
import Ebooks from "../component/Ebooks"
import Footer from "../component/Footer";
import Bookstype from "../component/Bookstype";
import Bookstypes from "../component/Bookstypes";

function Bookspage() {
    return(
        <div className="">
            <div>
                <Nav />
            </div>
            <Books />
            <Ebooks />
            <Bookstype />
            <Bookstypes />
            <Footer />
        </div>
    ); 
}

export default Bookspage