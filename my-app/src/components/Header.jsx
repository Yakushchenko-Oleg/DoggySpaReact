import React from 'react';
import '../../src/App.css'
import spaLogo from '../Icons/spaLogo.svg';
import searchLogo from '../Icons/search-Logo.svg';
import shoppingBagLogo from '../Icons/shopping-Bag-Logo.svg';
import userLogo from '../Icons/user-Logo.svg';



const Header = () =>{
return <header>
    <div className="header__Logo-cont">
        <img className='header__Logo' src={spaLogo} alt="logo" />
        <h3 className='header__Logo-title'>Luxe Animal Spa</h3>
    </div>
    <nav className="header__navbar">
        <ul className='header__navbar_ul'>
            <li className="header__navbar_li"> <a href="#">Home</a></li>
            <li className="header__navbar_li"><a href="#">Products</a></li>
            <li className="header__navbar_li"><a href="#">Spa Services</a></li>
            <li className="header__navbar_li"><a href="#">Book Appointment</a></li>
            <li className="header__navbar_li"><a href="#">Blog</a></li>
            <li className="header__navbar_li"><a href="#">About Us</a></li>
            <li className="header__navbar_li"><a href="#">Contact Us</a></li>
        </ul>

    </nav>
    <div className="header__clients-block">
        <img src={searchLogo} alt="search icon" className="header__clients-block_icon" />
        <img src={shoppingBagLogo} alt="shopping bag icon" className="header__clients-block_icon" />
        <img src={userLogo} alt="user icon" className="header__clients-block_icon" />
    </div>
</header>
}
export default Header