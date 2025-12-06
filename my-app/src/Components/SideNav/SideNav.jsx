import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.css';

export default function SideNav() {
  return (
    <aside className="side-nav">
      <div className="brand">Activities</div>
      <nav className="nav-links">
        <NavLink end to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Home
        </NavLink>
        <NavLink to="/prelim" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Prelim
        </NavLink>
        <NavLink to="/quiz" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Quiz Maker
        </NavLink>
        <NavLink to="/shopping" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Shopping
        </NavLink>
        <NavLink to="/nameplate" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Name List
        </NavLink>
        <NavLink to="/app2" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Fruits
        </NavLink>
        <NavLink to="/calculator" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Calculator
        </NavLink>
        <NavLink to="/academics" className={({ isActive }) => isActive ? 'link active' : 'link'}>
          Academic Manager
        </NavLink>
      </nav>
    </aside>
  );
}