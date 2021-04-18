import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2 p-lr-1">
                <a href="/" className="brand-logo">React + Typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/">Task list</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Info</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

