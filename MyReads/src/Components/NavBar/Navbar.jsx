import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to='' className="navbar-brand" href="#">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='books/wantToRead' tabindex="-1" aria-disabled="true">want to read</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='books/reading' tabindex="-1" aria-disabled="true">reading</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='books/read' tabindex="-1" aria-disabled="true">read</NavLink>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    )
}

export default Navbar