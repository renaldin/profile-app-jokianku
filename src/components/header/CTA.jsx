import React from 'react';
import Logo from '../../assets/logo-real.png';

import './cta.css';

const CTA = () => {
    return (
        <div className='cta'>
            <a href='#contact' className='btn-image'>
                <img src={Logo} className="logo" alt="Logo" />
            </a>
            <a href="#portfolio" className='btn-logo go'>Layanan Kami</a>
        </div>
    )
}

export default CTA