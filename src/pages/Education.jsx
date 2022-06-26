import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/box-item/icon1-recont-post.jpg'
import img2 from '../assets/images/box-item/icon2-recont-post.jpg'
import img3 from '../assets/images/box-item/icon3-recont-post.jpg'
import img4 from '../assets/images/box-item/icon4-recont-post.jpg'
import imgblog1 from '../assets/images/blog/thumb-7.jpg'



import edu1 from '../assets/images/box-item/image-box-46.jpg'
import edu01 from '../assets/images/avatar/avt-10.jpg'
import edu2 from '../assets/images/box-item/image-box-37.jpg'
import edu02 from '../assets/images/avatar/avt-8.jpg'
import edu3 from '../assets/images/box-item/image-box-38.jpg'
import edu03 from '../assets/images/avatar/avt-32.jpg'


const Education = () => {
    const [dataRecent] = useState(
        [
            {
                img: img1,
                title: '6 Make Mobile Website Faster',
                text: 'Lorem ipsum dolor sit amer....',
                time: 'August 10, 2021'
            },
            {
                img: img2,
                title: 'Experts Web Design Tips',
                text: 'Lorem ipsum dolor sit amer....',
                time: 'August 10, 2021'
            },
            {
                img: img3,
                title: 'Importance Of Web Design',
                text: 'Lorem ipsum dolor sit amer....',
                time: 'August 10, 2021'
            },
            {
                img: img4,
                title: 'Avoid These Erros In UI Design',
                text: 'Lorem ipsum dolor sit amer....',
                time: 'August 10, 2021'
            },

        ]
    )
    const [dataTags] = useState(
        [
            {
                name: 'Bitcoin'
            },
            {
                name: 'NFT'
            },
            {
                name: 'Bids'
            },
            {
                name: 'Digital'
            },
            {
                name: 'Arts'
            },
            {
                name: 'Marketplace'
            },
            {
                name: 'Token'
            },
            {
                name: 'Wallet'
            },
            {
                name: 'Crypto'
            },
        ]
    )

    const [data] = useState(
        [
            {
                img: edu1,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: edu01,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: edu2,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: edu02,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },
            {
                img: edu3,
                title: "Hamlet Contemplates Contemplates ",
                tags: "bsc",
                imgAuthor: edu03,
                nameAuthor: "SalvadorDali",
                price: "4.89 ETH",
                wishlist: "100",
            },

        ]
    )

    const [visible, setVisible] = useState(10);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const [modalShow, setModalShow] = useState(false);


    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Education</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Education</Link></li>
                                    <li>Education</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section post-details">
                <div className="themesflat-container">
                    <div className="wrap-flex-box style">
                        <div className="post">
                            <div className="inner-content">
                                <h2 className="title-post">I Believe everyone can be a designer as long they love to create design</h2>
                                <div className="divider"></div>
                                <div className="meta-post flex mg-bt-31">
                                    <div className="box">
                                        <div className="inner">
                                            <h6 className="desc">DESIGNER INTERVIEW</h6>
                                            <p>AUGUST CHAPTER</p>
                                        </div>
                                    </div>
                                    <div className="box left">
                                        <div className="inner boder pad-r-50">
                                            <h6 className="desc">WRITER</h6>
                                            <p>DWINAWAN</p>
                                        </div>
                                        <div className="inner mg-l-39 mg-r-1">
                                            <h6 className="desc">DATE</h6>
                                            <p>AUGUST 11, 2021</p>
                                        </div>
                                    </div>
                                </div>



                                <div className="image">
                                    <img src={imgblog1} alt="Axies" />
                                </div>
                                <div className="widget widget-tag style-1 mt-5">
                                    <h3 className="title-widget mg-bt-23">Popular Tag</h3>
                                    <ul>
                                        {
                                            dataTags.map((item, index) => (
                                                <li key={index}><Link to="/blog" className="box-widget-tag">{item.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="inner-post mg-t-40">
                                    <h3 className="heading mg-bt-16">What is the most fun thing to become a designer?</h3>
                                    <p className="mg-bt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </div>
                                <div className='row mt-5'>
                                    {
                                        data.slice(0, visible).map((item, index) => (
                                            <div className='col-lg-4 col-md-6 col-12'>
                                                <div className='content-inner'>
                                                    <div key={index} className={`sc-card-product menu_card style-h7 ${item.feature ? 'comingsoon' : ''} `}>
                                                        <div className="meta-info style">
                                                            <div className="author">
                                                                <div className="avatar">
                                                                    <img src={item.imgAuthor} alt="Axies" />
                                                                </div>
                                                                <div className="info">
                                                                    <span>Creator</span>
                                                                    <h6> <Link to="/author-02">{item.nameAuthor}</Link> </h6>
                                                                </div>
                                                            </div>
                                                            <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                                        </div>
                                                        <div className="card-media">
                                                            <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>
                                                        </div>
                                                        <div className="card-title">
                                                            <h5><Link to="/item-details-01">"{item.title}</Link></h5>
                                                        </div>
                                                        <div className="meta-info">
                                                            <div className="author">
                                                                <div className="info style2">
                                                                    <span>Current Bid</span>
                                                                    <span className="pricing">{item.price}</span>
                                                                </div>
                                                            </div>
                                                            <div className="tags">{item.tags}</div>
                                                        </div>
                                                        <div className="card-bottom">
                                                            <button onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>Place Bid</span></button>
                                                            <Link to="/activity-01" className="view-history reload">View History</Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="side-bar details">
                            <div className="widget widget-recent-post mg-bt-43">
                                <h3 className="title-widget mg-bt-23">Ads</h3>
                                <ul>
                                    {
                                        dataRecent.map((item, index) => (
                                            <li key={index} className="box-recent-post">
                                                <div className="box-feature"><Link to="/blog-details"><img src={item.img} alt="Axies" /></Link></div>
                                                <div className="box-content">
                                                    <Link to="/blog-details" className="title-recent-post">{item.title}</Link>
                                                    <span><span className="sub-recent-post">{item.text}</span><Link to="/blog" className="day-recent-post">{item.time}</Link></span>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Education;