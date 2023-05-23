import React from "react";
import "./Card.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = () => {
    return (
        <div className="card__container"> 
            <div className="card__topContainer">
                <div className="card__time">
                <p className="date">12 May, 2023</p>
                <p className="time">12:35 AM</p>
                </div>
                <div className="card__actions">
                    <EditIcon className="edit__icon"/>
                    <DeleteIcon className="delete__icon"/>
                </div>
            </div>
            <div className="card__downContainer">
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repudiandae?
                </div>
                <div className="duration">4hr</div>
            </div>
        </div>
    );
};

export default Card;
