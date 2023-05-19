import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./CardsDetails.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CardsDetails = () => {
    return (
        <div>
            {/* side bar */}
            <div className="main__container">
                <Sidebar />
                <div className="details__card">
                    {/* heading */}
                    <div className="detail__heading">
                        <h1>Hiking</h1>
                    </div>
                    {/* imgae container */}
                    <div className="detail__image__container">
                        <img src="../src/assets/hiking.jpg" alt="hiking image in details" />
                    </div>
                    {/* deatils container  */}
                    {/* 1st container */}
                    <div className="details__container">
                        <div className="detail__up__container">
                            <div className="left__detail">
                            <p>13 May, 2023</p>
                            <p>12:35 AM</p>
                            </div>
                            <div className="righ__detail">
                                <div className="edit__icon"><EditIcon/></div>
                                <div className="delete__icon"><DeleteIcon/></div>
                            </div>
                        </div>
                        <div className="detail__down">
                            <div className="description__detail">
                                <p>The quick crazy brown fox jumps over the lazy dog</p>
                            </div>
                            <div className="duration__detail">
                                <p>4 Hours</p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd card */}
                    <div className="details__container">
                        <div className="detail__up__container">
                            <div className="left__detail">
                            <p>13 May, 2023</p>
                            <p>12:35 AM</p>
                            </div>
                            <div className="righ__detail">
                                <div className="edit__icon"><EditIcon/></div>
                                <div className="delete__icon"><DeleteIcon/></div>
                            </div>
                        </div>
                        <div className="detail__down">
                            <div className="description__detail">
                                <p>The quick crazy brown fox jumps over the lazy dog</p>
                            </div>
                            <div className="duration__detail">
                                <p>4 Hours</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardsDetails
