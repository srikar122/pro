import React from 'react'
import '../styles/Home.css'
import home_img from '../images/home_img.jpg'
function Home() {
  return (
    <div className='home'>
        <div className="home-main">
            <img className='home-img' src={home_img} alt="" />
            <div className="home-head">
                <p>welcome...</p>
                <h1 className="home-head-inner">THE DEBUGGER</h1>
                <p>best rating platform</p>
            </div>
        </div>

    </div>
  )
}

export default Home