import React from 'react';
import Chatbox from '@/components/chatbox/Chatbox';
import Starfield from '@/components/staryCloud/StarBackground';
import Navbar from '@/components/navigation/Navbar';

 function Home() {

  return (
 <div className="Home">
  <Navbar />
    <Chatbox />    
      <Starfield
        starCount={500}
        starColor={[255, 221, 68]}
        speedFactor={0.05}
        backgroundColor="black" />
</div>


  )
}

export default Home;