import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, kami</h5>
                <h1>Jokian.beta</h1>
                <h5 className="text-light">Melayani Beberapa Jasa Jokian</h5>
                <CTA />
            </div>
        </header>
    )
}

export default Header