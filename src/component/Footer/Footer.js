import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__option">
                    <h3 className="footer__title">Get to Know Us</h3>
                    <ul className="footer__list">
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Investor Relations</li>
                        <li>Amazon Devices</li>
                        <li>Amazon Tours</li>
                    </ul>
                </div>
                <div className="footer__option">
                    <h3 className="footer__title">Make Money with Us</h3>
                    <ul className="footer__list">
                        <li>Sell products on Amazon</li>
                        <li>Sell apps on Amazon</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self_Publish with Us</li>
                        <li>Host an Amazon Hub</li>
                        <li>See More Make Money with Us</li>
                    </ul>
                </div>
                <div className="footer__option">
                    <h3 className="footer__title">Amazon Payment Products</h3>
                    <ul className="footer__list">
                        <li>Amazon Business Card</li>
                        <li>Shop with Points</li>
                        <li>Reload Your Balance</li>
                        <li>Amazon Currency Converter</li>
                    </ul>
                </div>
                <div className="footer__option">
                    <h3 className="footer__title">Let Us Help You</h3>
                    <ul className="footer__list">
                        <li>Amazon and COVID-19</li>
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Returns & Replacements</li>
                        <li>Manage Your Content and Devices</li>
                        <li>Amazon Assistant</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <p className="footer__copyright">&copy; 1996-2020, Amazon.com, Inc. or its affiliates</p>
        </footer>
    );
};

export default Footer;