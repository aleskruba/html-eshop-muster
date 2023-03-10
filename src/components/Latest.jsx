import React from 'react'
import KidsLatest from './KidsLatest'
import MenLatest from './MenLatest'
import OthersLatest from './OthersLatest'
import WomenLatest from './WomenLatest'

const Latest = () => {
  return (
    <div className='latest'>

        <MenLatest/>
        <WomenLatest/>
        <KidsLatest/>
     
    </div>
  )
}

export default Latest