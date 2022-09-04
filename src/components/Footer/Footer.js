import './Footer.css';

import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid footer-bg position-relative'>
            <div className='footer-content  '>
                <div className='news position-absolute top-0 start-50 translate-middle p-5'>
                    <h2 className='news-title'>NEWSLETTER</h2>
                    <p className='news-content pb-5'> pWe will send occasional newsletter to keep you informed</p>
                </div>
                <h3 className='mt-5'>Home | Privacy Policy | disclaimer | contact us</h3>
            </div>

        </div>
    );
};

export default Footer;