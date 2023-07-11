import React, { useState } from 'react';
import { useEffect } from "react";
import './Home.css'

function Home() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);
  
return (
    <div id='home'>
        Helcome to Stage!
    </div>
  );
}

export default Home;