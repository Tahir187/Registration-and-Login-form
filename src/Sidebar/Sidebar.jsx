import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
export default function Sidebar() {

  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebarTop">
        <div className="dashboard__item dashboard__home">
          <HomeIcon style={{ width: "32", height: "32" }} />
          <p>Home</p>
        </div>
        <div className="dashboard__item dashboard__createActivity">
          <CreateIcon style={{ width: "32", height: "32" }} />
          <p>Create</p>
        </div>
      </div>
      <div className="dashboard__item dashboard__logout">
        <LogoutIcon style={{ width: "32", height: "32" }} />
        <p>Logout</p>
      </div>
    </div>
  );
}
