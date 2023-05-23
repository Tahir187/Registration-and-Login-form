import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Header.css"
const Header = () => {
    const [activeTab, setActiveTab] = useState("Home")

    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }
        else if(location.pathname === "/create"){
            setActiveTab("CreateActivity")
        }
        else if(location.pathname === "/details"){
            setActiveTab("Details")
        }
    },[location]);

    return (
        <div className='header'>
            <p className="logo">Activity</p>
            <div className="header-right">
                {/* home page */}
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Home</p>
                </Link>
                {/*  create page */}
                <Link to="/create">
                    <p className={`${activeTab === "CreateActivity" ? "active" : ""}`} onClick={() => setActiveTab("Create Activity")}>Create Activity</p>
                </Link>
                {/* details pgae */}
                <Link to='/details'>
                    <p className={`${activeTab === "Details" ? "active" : ""}`} onClick={() => setActiveTab("Details")}>Details</p>
                </Link>
            </div>
        </div>
    )
}

export default Header
