import React, { useState } from 'react';
import { useEffect } from "react";
import './Home.css'
import Card from '../../common/Card/Card';
import Header from '../../common/Header/Header';

function Home() {
  useEffect(() => {
    document.documentElement.classList.add("full-height");
  }, []);
  
return (
    <div className='home'>
      <Header/>
        <Card
          title= 'Quem somos'
          text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra ac tellus ut auctor. Cras at dolor dolor. Pellentesque interdum leo vel purus pellentesque commodo. Integer interdum ut odio et interdum. Cras ornare tortor et quam viverra, ac egestas tellus ultrices. Nullam at imperdiet nisi. Nullam at feugiat tellus. Cras mollis fermentum ante sit amet placerat. Praesent non iaculis orci, non fringilla mauris. Cras eget neque venenatis, ullamcorper lectus non, porttitor ipsum. Fusce in augue lacus. Sed a odio vitae ante elementum vulputate. Etiam auctor dignissim orci ac laoreet. Nulla ut est neque. Mauris vitae placerat ligula. Nullam in ipsum felis.'
          image= 'https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
          width_card = {1200}
          height_card={200}
          position="left"
        />

        <Card
          title= 'Histórico'
          text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra ac tellus ut auctor. Cras at dolor dolor. Pellentesque interdum leo vel purus pellentesque commodo. Integer interdum ut odio et interdum. Cras ornare tortor et quam viverra, ac egestas tellus ultrices. Nullam at imperdiet nisi. Nullam at feugiat tellus. Cras mollis fermentum ante sit amet placerat. Praesent non iaculis orci, non fringilla mauris. Cras eget neque venenatis, ullamcorper lectus non, porttitor ipsum. Fusce in augue lacus. Sed a odio vitae ante elementum vulputate. Etiam auctor dignissim orci ac laoreet. Nulla ut est neque. Mauris vitae placerat ligula. Nullam in ipsum felis.'
          image= 'https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
          width_card = {1200}
          height_card={200}
          position="right"
        />

    </div>
  );
}

export default Home;