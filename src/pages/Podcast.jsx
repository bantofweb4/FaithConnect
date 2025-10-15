import React from "react";
import Podcastheader from "../component/Podcastheader";
import Nav from "../component/Nav";
import Versecomponent from "../component/Versecomponent";
import Podimg from "../component/Podimg";
import Searchbar from "../component/Searchbar";
import Footer from "../component/Footer";
import Pods from "../component/Pods";

function Podcast() {
    return(
        <>
           
            <Nav />
            <Podimg />
            <Searchbar />
            <Pods />
            <Footer />
        </>
    ); 
}

export default Podcast