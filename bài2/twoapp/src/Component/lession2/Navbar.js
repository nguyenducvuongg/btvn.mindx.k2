import React from 'react';
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className='Navbar-container'>
            <li>{props.sep}<span class="sold-out">Sold out</span></li>
            <li>{props.oct}<span class="sold-out">Sold out</span></li>
            <li>{props.nov}<span class="time">3</span></li>
        </div>
    );
};

export default Navbar;