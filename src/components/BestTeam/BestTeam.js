import './BestTeam.css';

import React from 'react';

import awardImg from '../../images/best-team-award.png';

const BestTeam = () => {
    return (
        <div className='position-relative'>
            <div className='container-fluid BestTeam-bg pt-5'>
                <div className='text-center'>


                    <div className='position-absolute top-20 start-50 translate-middle'>
                        <img className='' src={awardImg} alt="" />
                    </div>

                </div>
                <div className='position-absolute top-50 start-50 translate-middle pt-5'>
                    <h2 className='award-title'>An Awesome Team</h2>
                    <div className='award-box'>
                        <p className='award-content text-center'>Rapidiously actualize client-based products   out-of-the-box leadership skills.</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default BestTeam;