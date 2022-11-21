import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.scss'

export function Menu() {
  return (
    <nav className="Menu">
        <NavLink className="Menu__item" to='#'>News</NavLink>
        <NavLink className="Menu__item" to='#'>About us</NavLink>
        <NavLink className="Menu__item" to='#'>How to help?</NavLink>
        <NavLink className="Menu__item" to='#'>Contact</NavLink>
    </nav>
  )
}