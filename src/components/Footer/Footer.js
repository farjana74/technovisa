import './Footer.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { RiLinkedinFill } from 'react-icons/ri';

const Footer = () => {
    // animation of AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='container-fluid footer-bg position-relative'>
            <div className='footer-content  '>
                <div data-aos="fade-up" className='news position-absolute top-0 start-50 translate-middle pt-2 '>
                    <h2 className='news-title'>NEWSLETTER</h2>

                    <form className='mx-auto '>
                        <MdOutlineMail className='search-icon ' />
                        <input type="text" placeholder='Email Address' />
                        <button type="submit">SUBSCRIBE</button>

                    </form>
                    <div className=''>
                        <p className='news-content pb-5'> We will send occasional newsletter to keep you informed</p>
                    </div>
                </div>


                <div className='footer-last-bg'>



                    <div>
                        <h3 className='text-white footer-second footer-second-title '>© 2022 Awesome Company Inc.</h3>
                    </div>
                    <div>

                        <h3 className='text-white footer-seconds footer-second-title text-start'>Home | Privacy Policy | disclaimer | contact us</h3>
                    </div>

                    <div className='footer-box footer-seconds-last '>
                        <div>
                            <FaFacebookF className=' text-white fs-5' />
                        </div>
                        <div>
                            <AiOutlineTwitter className='text-white mx-2 fs-5' />
                        </div>
                        <div>
                            <RiLinkedinFill className='text-white fs-5' />
                        </div>

                        <div>
                            <h6 className='footer-second-content pt-3 ps-3'> ---FOLLOW US</h6>
                        </div>
                    </div>
                </div>






            </div>



        </div>
    );
};

export default Footer;