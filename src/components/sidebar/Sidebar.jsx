import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

export const Sidebar = () => {
  return (
    <aside className= "aside">
      <a href = '#home' className='nav__logo'>
        <img src= {Logo}alt="" />
      </a>

      <nav className='nav'>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
              <a href="#experience" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>
  )
}
