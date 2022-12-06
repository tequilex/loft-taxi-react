import React from "react";
import sidebarLogo from '../../assets/img/sidebarLogo.svg'
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={sidebarLogo} alt="logo" />
      </div>
    </div>
  )
}