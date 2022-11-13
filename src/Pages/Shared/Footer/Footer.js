import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="p-10 mt-16" style={{ background: `url(${footer})`,backgroundSize:'contain' }}>
            <div className='footer'>
            <div>
                <span className="footer-title">SERVICES</span>
                <Link to='/' className="link link-hover">Emergency Checkup</Link>
                <Link to='/' className="link link-hover">Monthly Checkup</Link>
                <Link to='/' className="link link-hover">Weekly Checkup</Link>
                <Link to='/' className="link link-hover">Deep Checkup</Link>
            </div>
            <div>
                <span className="footer-title">ORAL HEALTH</span>
                <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                <Link to='/' className="link link-hover">Cavity Filling</Link>
                <Link to='/' className="link link-hover">Teeth Whitening</Link>
            </div>
            <div>
                <span className="footer-title">OUR ADDRESS</span>
                <p>New York - 101010 Hudson</p>
            </div>
            </div>
            <div className='text-center mt-28 font-semibold'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;