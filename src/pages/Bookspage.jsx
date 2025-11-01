import React from "react";
import Nav from "../component/Nav";
import Books from "../component/Books";
import Ebooks from "../component/Ebooks"
import Footer from "../component/Footer";
import Bookstype from "../component/Bookstype";
import Bookstypes from "../component/Bookstypes";

function Bookspage() {
    return(
        <>
            <Nav />
            <Books />
            <Ebooks />
            <Bookstype />
            <Bookstypes />
            <Footer /> 
        </>
    ); 
}

export default Bookspage