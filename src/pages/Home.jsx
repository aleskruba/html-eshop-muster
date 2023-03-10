import React from 'react'
import Intro from '../components/Intro'
import Latest from '../components/Latest'
import Explore from '../components/Explore'
import Socials from '../components/Socials'
import Subscribe from '../components/Subscribe'


const Home = () => {
    return (
      <div className='home'>
          <Intro/>
          <Latest/>
          <Explore/>
          <Socials/>
          <Subscribe/>
          

      </div>
    )
  }
  
  export default Home