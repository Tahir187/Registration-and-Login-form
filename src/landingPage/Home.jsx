import React from 'react'
import Navbar from './Navbar'
import "./Home.css";

const Home = () => {
  return (
    <div>
        <div className="bg__image__container"></div>
      <nav className='home__navbar'>
        <Navbar/>
      </nav>
      <div className="home__container">
        <div className="left__container">
            <div className="heading__container">
            <h1>Exercise Tracker</h1>
            <p>The quick brown fox jump over the lazy dog</p>
            </div>
            <div className="home__button__container">
                <button type="submit">Register</button>
            </div>
        </div>
        <div className="right__container">
            <img src="../src/assets/bgpic.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
