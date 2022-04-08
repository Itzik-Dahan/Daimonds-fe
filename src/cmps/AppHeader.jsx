import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppHeader = ({ isScroll }) => {
    return (
        <header className={`header main-layout ${isScroll ? 'is-scroll' : ''}`}>
            <div className="app-header">
                <nav className="links">
                    <NavLink className="simple-button" exact to="/">
                        Home
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
