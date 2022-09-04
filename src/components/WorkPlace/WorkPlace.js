import './WorkPlace.css';

import React from 'react';

import workplaceBottom from '../../images/workplace-bottom.png';
import workplaceImg from '../../images/workplace-first.png';
import workplaceTop from '../../images/workplace-top.png';

const WorkPlace = () => {
    return (
        <div className='container py-5'>
            <h1 className='workplace-title'>Glimpses</h1>
            <h6 className='workPlace-content py-4'>Our workplace can be best previewed in photos</h6>
            <div className="row gx-5">
                <div className="col">
                    <img className='w-100 workplace-first-bg' src={workplaceImg} alt="" />

                </div>
                <div className="col workplace-image">
                    <div> <img className='workplace-image-top' src={workplaceTop} alt="" />
                    </div>
                    <div className='pt-4'> <img className='workplace-image-bottom' src={workplaceBottom} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkPlace;