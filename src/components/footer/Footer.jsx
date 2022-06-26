import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logodark from '../../assets/images/logo/logo_dark.png'
import logofooter from '../../assets/images/logo/logo2.png'
const Footer = () => {
    const accountList = [
        {
            title: "Designers",
            link: "/authors-01"
        },
        {
            title: "Collection",
            link: "/wallet-connect"
        },
        {
            title: "Author Profile",
            link: "/edit-profile"
        },
        {
            title: "Create Item",
            link: "/create-item"
        },
    ]
    const resourcesList = [
        {
            title: "Help & Support",
            link: "/help-center"
        },
        {
            title: "Live Auctions",
            link: "/live-auctions"
        },
        {
            title: "Item Details",
            link: "/item-details-01"
        },
        {
            title: "Activity",
            link: "/activity-01"
        },
    ]
    const companyLists = [
        {
            title: "Explore",
            link: "/explore-01"
        },
        {
            title: "Contact Us",
            link: "/contact-01"
        },
        {
            title: "Our Blog",
            link: "/blog"
        },
        {
            title: "FAQ",
            link: "/faq"
        },
    ]
    const companyListsmedi = [
        {
            title: "Become a Seller",
            link: "/"
        },
        {
            title: "Adverties",
            link: "/"
        },
        {
            title: "Gift Cards",
            link: "/"
        },
        {
            title: "Help Center",
            link: "/"
        },
        {
            title: "© right 2022 Creat.com",
            link: "/"
        },
    ]
    const MakeMoneyus = [
        {
            title: "Explore",
            link: "/explore-01"
        },
        {
            title: "Contact Us",
            link: "/contact-01"
        },
        {
            title: "Our Blog",
            link: "/blog"
        },
        {
            title: "FAQ",
            link: "/faq"
        },
    ]
    const socialList = [
        {
            icon: "fa-brands fa-facebook-f",
            link: "#"
        },
        {
            icon: "fa-brands fa-instagram",
            link: "#"
        },
        {
            icon: "fa-brands fa-github",
            link: "#"
        },
        {
            icon: "fa-brands fa-twitter",
            link: "#"
        } 
    ]
    const socialList2 = [
         
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "fa-brands fa-linkedin-in",
            link: "#"
        },
        {
            icon: "fa-brands fa-snapchat",
            link: "#"
        },
        {
            icon: "fa-brands fa-tiktok",
            link: "#"
        },
    ]
    const socialLists = [
        {
            icon: "fa-solid fa-credit-card",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-visa",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-mastercard",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-mastercard",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-paypal",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-discover",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-amex",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-diners-club",
            link: "#"
        },
        {
            icon: "fa-brands fa-cc-amazon-pay",
            link: "#"
        },
    ]


    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <div>
            <footer id="footer" className="footer-light-style clearfix bg-style">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-2 col-md-12 col-12">
                            <div className="widget widget-logo">
                                <div className="logo-footer" id="logo-footer">
                                    <Link to="/">
                                        <img className='logo-dark' id="logo_footer" src={logodark} alt="nft-gaming" width='200px' />
                                        <img className='logo-light' id="logo_footer" src={logofooter} alt="nft-gaming" width='200px' />

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu style-1">
                                <h6 className="title-widget">My Account</h6>
                                <ul>
                                    {
                                        accountList.map((item, index) => (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-7 col-7">
                            <div className="widget widget-menu style-2">
                                <h6 className="title-widget">Resources</h6>
                                <ul>
                                    {
                                        resourcesList.map((item, index) => (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu fl-st-3">
                                <h6 className="title-widget">Company</h6>
                                <ul>
                                    {
                                        companyLists.map((item, index) => (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-5 col-5">
                            <div className="widget widget-menu fl-st-3">
                                <h6 className="title-widget">Make Money with US</h6>
                                <ul>
                                    {
                                        MakeMoneyus.map((item, index) => (
                                            <li key={index}><Link to={item.link}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-7 col-12">
                            <div className="widget widget-subcribe">
                                <h6 className="title-widget">Subscribe Us</h6>
                                <div className="form-subcribe">
                                    <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8" className="form-submit">
                                        <input name="email" className="email" type="email" placeholder="info@yourgmail.com" required />
                                        <button id="submit" name="submit" type="submit"><i className="icon-fl-send"></i></button>
                                    </form>
                                </div>
                                <div className="widget-social style-1 mg-t32">
                                    <ul>
                                        {
                                            socialList.map((item, index) => (
                                                <li key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='mt-3'>
                                        {
                                            socialList2.map((item, index) => (
                                                <li key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5' style={{backgroundColor:'rgb(20 20 31)'}}>
                <div className='themesflat-container '> 
                    <div className='row'>
                        <div className='col-md-8 col-12'>
                            <div className="widget widget-menu fl-st-3 py-3 px-0">
                                <ul className='d-flex align-items-center justify-content-between h-100'>
                                    {
                                        companyListsmedi.map((item, index) => (
                                            <li className='m-0' key={index}><Link to={item.link} style={{fontSize:'18px'}}>{item.title}</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-12'>
                            <div className="widget widget-menu fl-st-3 py-3 px-0">
                                <ul className='d-flex align-items-center justify-content-end h-100'>
                                    {
                                        socialLists.map((item, index) => (
                                            <li className='mx-2 mb-0' key={index}><Link to={item.link} style={{fontSize:'18px'}}><i className={item.icon}></i></Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
            {
                isVisible &&
                <Link onClick={scrollToTop} to='#' id="scroll-top"></Link>
            }

            <div className="modal fade popup" id="popup_bid" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3>Place a Bid</h3>
                            <p className="text-center">You must bid at least <span className="price color-popup">4.89 ETH</span>
                            </p>
                            <input type="text" className="form-control"
                                placeholder="00.00 ETH" />
                            <p>Enter quantity. <span className="color-popup">5 available</span>
                            </p>
                            <input type="number" className="form-control" placeholder="1" />
                            <div className="hr"></div>
                            <div className="d-flex justify-content-between">
                                <p> You must bid at least:</p>
                                <p className="text-right price color-popup"> 4.89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Service free:</p>
                                <p className="text-right price color-popup"> 0,89 ETH </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Total bid amount:</p>
                                <p className="text-right price color-popup"> 4 ETH </p>
                            </div>
                            <Link to="#" className="btn btn-primary" data-toggle="modal" data-target="#popup_bid_success" data-dismiss="modal" aria-label="Close"> Place a bid</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;
