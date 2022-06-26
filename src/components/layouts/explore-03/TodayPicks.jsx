import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TodayPicks = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);
    return (
        <Fragment>
            <section className="tf-explore-2 tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-13">
                                Add Product
                            </h2>


                        </div>
                            <div className='col-md-4 col-sm-12 col-12'>
                                <div className='d3card d3card1'>
                                    <Link to='/'>
                                        <div className="links_create_item ">
                                            <h4 className='nftbtn_text font-weight-normal'>3D Design</h4> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 col-12'>
                                <div className='d3card d3card2'>
                                    <Link to='/'>
                                        <div className="links_create_item "> 
                                            <h4 className='nftbtn_text font-weight-normal'>Physical Product</h4> 
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 col-12'>
                                <div className='d3card d3card3'>
                                    <Link to='/'>
                                        <div className="links_create_item "> 
                                            <h4 className='nftbtn_text font-weight-normal'>Create NFT</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}

export default TodayPicks;
