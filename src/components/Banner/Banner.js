import './Banner.css';

import React from 'react';

import bannerImg from '../../images/Blob.png';
import navLogo from '../../images/Logo (4).png';

const Banner = () => {
    return (

        <div className="container-fluid banner-bg navs-bg">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav ms-auto navigation-first   mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">ABOUT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">SERVICES</a>
                                </li>
                            </ul>

                        </div>
                        <img className='' src={navLogo} alt="" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav navigation-second me-auto  mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/#">PORTFOLIO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">CONTACT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/#">SUPPORT</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </div>


            <div className='container  '>
                <div className="row ">
                    <div className="col-md-7 ">
                        <div className='banner-content'>
                            <div>
                                <h1 className='banner-title'>A Venture with Passion</h1>
                                <p className='banner-description'>Continually whiteboard viral ROI with functional e-services.<br /> Enthusiastically fabricate equity invested communities rather than <br />  cross-media markets.</p>
                                <button type="button" className="btn banner-button button-content">GET QUOTE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 banner-content ">
                        <img className="w-100" src={bannerImg} alt="" />
                    </div>


                </div>


            </div>
        </div>


    );
};

export default Banner;