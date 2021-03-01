import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-item'>
                <a href="/Home">Home</a>
                <a href="/about">About</a>
                <a href="/salary">SalarReview</a>
            </div>
        </div>
    );
};

export default Header;