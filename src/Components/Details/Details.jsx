import React from 'react'
import "./Details.css"
import Card from './Card'

const Details = () => {
    return (
        <div className='details__container'>
            <div className="details__main">
                <div className="details__heading">
                    <h2>Hiking</h2>
                </div>
                <div className="details__image">
                    <img src="../src/assets/hiking.jpg" alt="hiking image" />
                </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Details
