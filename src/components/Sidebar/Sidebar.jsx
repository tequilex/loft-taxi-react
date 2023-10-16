import React from "react";
import sidebarLogo from '../../assets/img/sidebarLogo.svg'
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-wrapper">
        <img src={sidebarLogo} alt="logo" className="sidebar-logo" />
      </div>
    </div>
  )
}