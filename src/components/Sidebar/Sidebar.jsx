import React from "react";
import sidebarLogo from './sidebarLogo.svg'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={sidebarLogo} alt="logo" />
      </div>
    </div>
  )
}