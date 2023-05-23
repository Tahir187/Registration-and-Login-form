import React, { useState } from 'react'
import "./CreateActivity.css"
const CreateActivity = () => {
    const [selectedType, setSelectedType] = useState();

    const handleSelect = (event) =>{
        setSelectedType(event.target.value);
    }
    return (
        <div>
            <div className="main__container">
                <div className="left__create__activity__container">
                    <img src="../src/assets/running-1.png" alt="create activity image" />
                </div>
                <div className="right__create__activity__container">

                    <div className="form__container">
                        <h2>Create Activity</h2>
                        <input type="text" name='description' id='description' placeholder='Description' />
                        <select name="select-type" id="select-type" onChange={handleSelect}>
                            <option value="Select Type" disabled>Select Type</option>
                            <option value="walking">Walking</option>
                            <option value="running">Running</option>
                            <option value="swimming">Swimminge</option>
                            <option value="cycling">Cycling</option>
                            <option value="hiking">Hiking</option>
                        </select>
                        <input type="time" name="duration" id="duration" placeholder='Duration' />
                        <input type="date" name="date" id="date" placeholder='Date' />
                        <button type="submit">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateActivity
