import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AppHeader = () => {
    return (
        <header className="header main-layout">
            <div className="app-header">
                <Link className="simple-button" to="/">
                    Logo
                </Link>
                <nav className="links">
                    <NavLink className="simple-button" exact to="/">
                        Home
                    </NavLink>
                    {/* <NavLink className="simple-button" to="/item">
                        item
                    </NavLink> */}
                </nav>
            </div>
        </header>
    );
};
