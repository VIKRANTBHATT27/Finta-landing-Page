import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "./components/Container.jsx";
import Secondary from "./components/Secondary.jsx";
import { useEffect, useState } from "react";

function App() {

  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    setVisible(true);
  });

  return (
    <div className="flex flex-col items-center h-full bg-[radial-gradient(circle_at_top,#fff_0%,#e0f0ff_50%)]">
      <div className="absolute max-w-5xl mx-auto -mt-0.5 h-[80%] inset-y-0  inset-0 left-0 z-0"> 
        {/* adding a cover element bg-green-300 and see */}
        <div className="absolute left-0 h-full w-px bg-linear-to-b from-neutral-200 via-neutral-300/50 to-neutral-200/50"></div>
        <div className="absolute right-0 h-full w-px bg-linear-to-b from-neutral-200 via-neutral-300/50 to-neutral-200/50"></div>
      </div>


      <Container className="w-full relative">
        <Navbar />
        <Hero />  
      </Container>
      
      <div className="relative w-full h-screen flex flex-col items-center bg-linear-to-b from-[#e0f0ff], to-white">
        <div className={`h-px w-full absolute bg-linear-to-r from-neutral-200 via-neutral-300/50 to-neutral-200/50 z-0 transition-opacity delay-1500 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"} `}></div>
        
        <Secondary />

      </div>
      
    </div>
  )
}

export default App;