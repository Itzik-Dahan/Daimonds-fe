import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AppHeader = ({ isScroll }) => {
    return (
        <header className={`header main-layout ${isScroll ? 'is-scroll' : ''}`}>
            <div className="app-header">
                {/* <Link className="simple-button" to="/">
                    Logo
                </Link> */}
                <nav className="links">
                    <NavLink className="simple-button" exact to="/">
                        Home
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
