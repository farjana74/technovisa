import './WorkPlace.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';

import work3 from '../../images/workplace-bottom.png';
import work1 from '../../images/workplace-first.png';
import work2 from '../../images/workplace-top.png';

const WorkPlace = () => {
    // animation of AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (

        <div className="py-5">
            <h1 className='workplace-title'>Glimpses</h1>
            <h6 className='workPlace-content py-3'>Our workplace can be best previewed in photos</h6>
            <div className="container-fluid  workplace-bg-image ">


                <div className="container style-bg">
                    <div className="row gy-3">
                        <div data-aos="fade-right" className="col-md-7 col-sm-12">
                            <img className=' w-100 workplace-first-bg ' src={work1} alt="" />
                        </div>
                        <div data-aos="fade-left" className="col-md-5 col-sm-12">
                            <div>
                                <img className='workplace-image-top w-100' src={work2} alt="" />
                            </div>
                            <div className='bottom-div'>
                                <img className=' w-100 workplace-image-bottom' src={work3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default WorkPlace;