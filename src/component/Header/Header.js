import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase/Firebase';

const Header = () => {
    const [ { basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <div className="header__bandLocation">
                <Link to="/">
                    <img 
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="amazon-logo"
                    />
                </Link>
                <div className="header__location">
                    <span className="header__locationOptionLineOne">Deliver to</span>
                    <span className="lnr lnr-map-marker"><span className="header__locationOptionLineTwo">Canada</span></span>
                </div>
            </div>
            <div className="header__searchBox">
                <input type="text" className="header__searchInput" />
                <span className="lnr lnr-magnifier"></span>
            </div>
            <div className="header__navbar">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__navbarOptionLineOne">{user ? `${user.email}` : 'Hello, Sign In'}</span>
                        <span className="header__navbarOptionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__navbarOptionLineOne">Returns</span>
                        <span className="header__navbarOptionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header__option">
                        <span><span className="lnr lnr-cart"></span>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;