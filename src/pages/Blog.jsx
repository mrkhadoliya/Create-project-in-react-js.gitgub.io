import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../assets/fake-data/data-blog'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


import img1 from '../assets/images/box-item/icon1-recont-post.jpg'
import img2 from '../assets/images/box-item/icon2-recont-post.jpg'
import img3 from '../assets/images/box-item/icon3-recont-post.jpg'
import img4 from '../assets/images/box-item/icon4-recont-post.jpg'
import Slider from '../components/slider/Slider';
import heroSliderData from '../assets/fake-data/data-slider';
import SliderStyle1 from '../components/slider/SliderStyle1';


const Blog = () => {
    const [data] = useState(blogData);

    const [visible, setVisible] = useState(6);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

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


    return (
        <div>
            <Header />
            <SliderStyle1 data={heroSliderData} />
            <section className="flat-title-page inner d-none">
            
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Blog</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Community</Link></li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-section sc-card-blog dark-style2">
                <div className="themesflat-container">
                    <div className="row">
                        <div className='col-lg-9 col-md-8'>
                            <div className='blogs-area'>
                                <div className='row'>
                                    {
                                        data.slice(0, visible).map((item, index) => (
                                            <BlogItem key={index} item={item} />
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4'>
                            <div className="side-bar details">
                                <div className="widget widget-recent-post mg-bt-43">
                                    <h3 className="title-widget mg-bt-23">Recent Post</h3>
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
                                <div className="widget widget-tag style-1">
                                    <h3 className="title-widget mg-bt-23">Popular Tag</h3>
                                    <ul>
                                        {
                                            dataTags.map((item, index) => (
                                                <li key={index}><Link to="/blog" className="box-widget-tag">{item.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {
                            visible < data.length &&
                            <div className="col-md-12 wrap-inner load-more text-center">
                                <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 mt-6" onClick={showMoreItems}><span>Load More</span></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

const BlogItem = props => (
    <div className="fl-blog fl-item2 col-lg-4 col-md-6">
        <article className="sc-card-article">
            <div className="card-media">
                <Link to="/blog-details"><img src={props.item.img} alt="Axies" /></Link>
            </div>
            <div className="meta-info">
                <div className="author">
                    <div className="avatar">
                        <img src={props.item.imgAuthor} alt="Axies" />
                    </div>
                    <div className="info">
                        <span>Post owner</span>
                        <div style={{ fontSize: '14px' }}> <Link to="/author-02">{props.item.nameAuthor}</Link> </div>
                    </div>
                </div>
                <div className="date" style={{ fontSize: '14px' }}>{props.item.time}</div>
            </div>
            <div className="text-article">
                <h5 className='font-weight-normal mb-3'><Link to="/blog-details">{props.item.title}</Link></h5>
                <p style={{ fontSize: '14px' }}>{props.item.content}</p>
            </div>
            <Link to="/blog-details" className="sc-button fl-button pri-3"><span>Read More</span></Link>
        </article>
    </div>
)

export default Blog;
