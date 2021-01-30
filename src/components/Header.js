import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expansify</h1>
        <NavLink to="/" activeClassName="is-string" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-string">Add Expanse</NavLink>
        
    </header>
)

export default Header;