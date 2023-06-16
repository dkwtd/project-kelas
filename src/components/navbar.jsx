import React from 'react';

export default function navbar() {
  return (
    <nav className="navbar bg-light border-bottom border-success border-2 shadow">
    <div className="container-fluid">
        <a className="navbar-brand fw-bolder text-success" href="#">Second Nature</a>
        <ul className="nav">
            <li className="nav-item">
                <a href="/" className="nav-link link-dark fw-semibold">Home</a>
            </li>
            <li className="nav-item">
                <a href="/list-menu" className="nav-link link-dark fw-semibold">List Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link-dark fw-semibold"  href="#">Contact</a>
            </li>
        </ul>
    </div>
   </nav>
  );
}
