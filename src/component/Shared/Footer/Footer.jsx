import React from 'react';
import fb from '../../../assets/fb.png'
import twitter from '../../../assets/tw.png'
import instagram from '../../../assets/insta.png'
import pin from '../../../assets/pinta.png'
import webLogo from '../../../assets/weblogo.jpg'
import { Link } from 'react-router-dom';
import { FaInbox, FaLocationArrow, FaPhone } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer justify-between p-10 md:pe-28 bg-base-200 text-base-content">
                <div>
                    <img src={webLogo} className='w-36' alt="" />
                    <p className='md:w-96'>Our camp provides outstanding education and has been delivering a wide range of A-Level, higher and further education courses, while also promoting UK cultural such as our Summer and Winter Courses etc</p>
                </div>

                <div className='w-full '>
                    <span className="footer-title">Contact</span>
                    <p className='flex gap-3 items-center'><FaLocationArrow></FaLocationArrow> 20 School Ln, Rose Valley, PA, 19063</p>
                    <p className='flex gap-3 items-center'><FaPhone></FaPhone> +44 1223 200000</p>
                    <p className='flex gap-3 items-center'><FaPhone></FaPhone>+44 0870 4500000 (fax)</p>
                    <p className='flex gap-3 items-center'><FaInbox></FaInbox>info@example.com</p>
                </div>

            </footer>


            <div className='md:flex justify-between px-10 bg-base-200'>
                <div>
                    <span className="footer-title">Connect with us</span>
                    <div className='flex py-5 space-x-5'>
                        <Link to="https://twitter.com/"><img src={twitter} alt="" /></Link>
                        <Link to="https://www.facebook.com/"><img src={fb} alt="" /></Link>
                        <Link to="https://www.pinterest.com/"><img src={pin} alt="" /></Link>
                        <Link to="https://www.instagram.com/"><img src={instagram} alt="" /></Link>
                    </div>
                </div>


                <div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80 py-5">

                            <div className="relative">
                                <input type="text" placeholder="Your Email Address" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-outline btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-base-200 p-5'>
                <p className='text-sm text-stone-500'>@2023 Tishan Sarker.All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;