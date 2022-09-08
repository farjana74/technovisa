import './BestTeam.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';

import awardImg from '../../images/Badge.png';

const BestTeam = () => {
    // animation of AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='position-relative'>
            <div className='container-fluid BestTeam-bg pt-5'>
                <div className='text-center'>


                    <div data-aos="zoom-in" className='position-absolute top-20 start-50 translate-middle award-team-bg'>
                        <img className='' src={awardImg} alt="" />
                    </div>

                </div>
                <div data-aos="fade-up" className='position-absolute top-50 start-50 translate-middle mt-5'>
                    <h2 className='award-title pt-2'>An Awesome Team</h2>
                    <div className='award-box'>
                        <p className='award-content text-center'>Rapidiously actualize client-based products before
                            out-of-the-box leadership skills.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default BestTeam;