import './Banner.css';

import React from 'react';

import bannerImg from '../../images/Blob.png';

const Banner = () => {
    return (
        <div className='container-fluid banner-bg'>
            <div className='container '>
                <div className="row align-items-center justify-content-center ">
                    <div className="col-md-6 ">
                        <div className='banner-content'>
                            <div>
                                <h1 className='banner-title'>A Venture with Passion</h1>
                                <p className='banner-description'>Continually whiteboard viral ROI with functional e-services. Enthusiastically fabricate equity invested communities rather than cross-media markets.</p>
                                <button type="button" className="btn banner-button button-content">GET QUOTE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <img src={bannerImg} alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Banner;