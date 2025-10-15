import React from 'react';
import Nav from '../component/Nav';
import Header from '../component/Header';
import Versecomponent from '../component/Versecomponent';
import About from '../component/About';
import Meaningrelationship from '../component/Meaningrelationship';
import Footer from '../component/Footer';
import Podimg from '../component/Podimg';
import Books from '../component/Books';

function LandingPage() {
  return (
    <>
    
      <body className ="mx-[10px] font-outfit">
          <div id="background" className="w-full h-screen bg-no-repeat bg-center bg-cover z-0" >
            <Nav />

            <Header /> 

           
          </div>
            <Versecomponent />

            <Podimg />

            <Books />
            
            <About />
            
            <Meaningrelationship />

            <Footer />
        
      </body>
    </>
  );
}

export default LandingPage