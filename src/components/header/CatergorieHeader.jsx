import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import MenuCatergorie from "../../pages/MenuCatergorie";
import DarkMode from './DarkMode';
import logoheader from '../../assets/images/logo/logo.png'
import logoheader2x from '../../assets/images/logo/logo@2x.png'
import logodark from '../../assets/images/logo/logo_dark.png'
import logodark2x from '../../assets/images/logo/logo_dark@2x.png'
import imgsun from '../../assets/images/icon/sun.png'
import imglogin from '../../assets/images/icon/login.png'
import avt from '../../assets/images/avatar/avt-2.jpg'


const CatergorieHeader = () => {
    const { pathname } = useLocation();

    const headerRef = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };

    return (
        <header id="header_main" className="header_1s js-headers secheader" ref={headerRef} style={{ position: 'absolute', width: '100%', top: '79px', backgroundColor: '#14141f', zIndex: '9' }}>
            <div className='d-md-block d-none'>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="site-header-inner">
                                <div className="wrap-box flex position-relative">
                                    <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                                    <nav id="main-nav" className="main-nav " ref={menuLeft} style={{ left: '0', top: '0px' }} >
                                        <ul id="menu-primary-menu" className="menu">
                                            {
                                                MenuCatergorie.map((data, index) => (
                                                    <li key={index} onClick={() => handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === index ? 'active' : ''} `}   >
                                                        <Link to={data.links}>{data.name}</Link>
                                                        {
                                                            data.namesub &&
                                                            <ul className="sub-menu" >
                                                                {
                                                                    data.namesub.map((submenu) => (
                                                                        <li key={submenu.id} className={
                                                                            pathname === submenu.links
                                                                                ? "menu-item current-item"
                                                                                : "menu-item"
                                                                        }>
                                                                            <Link to={submenu.links}>{submenu.sub}</Link></li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }

                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default CatergorieHeader;
