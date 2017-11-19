import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="btn-group">
                <NavLink type="button"  to="/" exact activeClassName="active"className="btn">Home</NavLink>
                <NavLink type="button" to="/add" activeClassName="active" className="btn">Add</NavLink>

        </div>

    );
};

export default Header;