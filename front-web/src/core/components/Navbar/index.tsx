import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to="/" className="nav-logo-text">
                    <h6>DS Catalog</h6>
                </Link>
            </div>
            <div className="col-6 offset-2">
                <ul className="main-menu">
                    <li>
                        <NavLink to="/" activeClassName="active" exact>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active">
                            CATÁLOGO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" activeClassName="active">
                            ADMIN
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;