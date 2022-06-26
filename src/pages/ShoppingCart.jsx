import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/box-item/card-item-10.jpg'
import img2 from '../assets/images/box-item/image-box-10.jpg'
import img3 from '../assets/images/box-item/image-box-11.jpg'
import img4 from '../assets/images/box-item/image-box-21.jpg'
import img5 from '../assets/images/box-item/image-box-6.jpg'
import { Button } from 'bootstrap';


const ShoppingCart = () => {
    const [dataBox] = useState(
        [
            {
                img: img1,
                title: 'Monica Lucas',
                status: '500',
                time: 'Only 2 left in stock',
                rate:'2.5/5',
                addtocarts:'Add to Cart'
            },
        ]);


    const [boxcheckd] = useState(
        [
            {
                checked: 'checked'
            },
        ]
    )
    const [dataFilter] = useState(
        [
            {
                name: 'This will be a gift',
                checked: ''
            },
        ]
    )
    const [cartFilter] = useState(
        [
            {
                name: 'This order contains a gift',
                checked: ''
            },
        ]
    )

    const [visible, setVisible] = useState(5);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Shopping Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-activity s1 tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-12">
                            {
                                dataBox.slice(0, visible).map((item, index) => (
                                    <div className="sc-card-activity style1" key={index}>
                                        <div className="content">
                                            <div className='ckeck_boxs mr-3'>
                                                <div className="widget widget-filter style-1 mgbt-0">
                                                    <form action="#" className="form-inner">
                                                        {
                                                            boxcheckd.map((item, index) => (
                                                                <div key={index}>
                                                                    <label >
                                                                        {item.name}
                                                                        <input type="checkbox" defaultChecked={item.checked} />
                                                                        <span className="btn-checkbox"></span>
                                                                    </label>
                                                                </div>
                                                            ))
                                                        }

                                                    </form>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <Link to='/cart'>
                                                    <img src={item.img} alt="Axies" />
                                                </Link>
                                            </div>
                                            <div className="infor">
                                                <h3 className='font-weight-normal'> <Link to="/item-details-01">{item.title}</Link></h3>
                                                <div className="status"><i class="fa-solid fa-indian-rupee-sign"></i> {item.status}</div>
                                                <div className="time" style={{ fontSize: '12px' }}>{item.time}</div>
                                                <div className="widget widget-filter style-1 mgbt-0">
                                                    <form action="#" className="form-inner">
                                                        {
                                                            dataFilter.map((item, index) => (
                                                                <div key={index}>
                                                                    <label >
                                                                        {item.name}
                                                                        <input type="checkbox" defaultChecked={item.checked} />
                                                                        <span className="btn-checkbox"></span>
                                                                    </label>
                                                                </div>
                                                            ))
                                                        }

                                                    </form>
                                                </div>
                                                <div className='qut-box'>
                                                    <div className='boxs_areaA'>
                                                        <div className="inner-row-form style-2">
                                                            <div className="seclect-box">
                                                                <div id="item-create" className="dropdown">
                                                                    <Link to="#" className="btn-selector nolink" style={{ border: '1px solid #4b4b61', padding: '7px' }}>Qty:1</Link>
                                                                    <ul>
                                                                        <li><span>Qty:1</span></li>
                                                                        <li><span>Qty:2</span></li>
                                                                        <li><span>Qty:3</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='dlt-box ml-md-5 ml-3'>
                                                        <Link to='/' className=''>
                                                            <h6 className='font-weight-normal'>Delete</h6>
                                                        </Link>
                                                    </div>
                                                    <div className='dlt-box ml-md-5 ml-3'>
                                                        <Link to='/' className=''>
                                                            <h6 className='font-weight-normal'>Save for later</h6>
                                                        </Link>
                                                    </div>
                                                    <div className='dlt-box ml-md-5 ml-3'>
                                                        <Link to='/' className=''>
                                                            <h6 className='font-weight-normal'>see more like this</h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                            <div className='content mb-5'>
                                <div className='total-amounn text-right'>
                                    <h5 className=''>Subtotal <span>(item 1 )</span> : <span><i class="fa-solid fa-indian-rupee-sign"></i>500 <sup>00</sup> </span> </h5>
                                </div>
                            </div>
                            <div className='content mb-5'>
                                <div className='total-amounn'>
                                    <h3 className='font-weight-bold'>Your Items</h3>
                                </div>
                            </div>
                            {
                                dataBox.slice(0, visible).map((item, index) => (
                                    <div className="sc-card-activity style1" key={index}>
                                        <div className="content">
                                            <div className="media">
                                                <Link to='/cart'>
                                                    <img src={item.img} alt="Axies" />
                                                </Link>
                                            </div>
                                            <div className="infor">
                                                <h3 className='font-weight-normal'> <Link to="/item-details-01">{item.title}</Link></h3>
                                                <div className="status"><i class="fa-solid fa-indian-rupee-sign"></i> {item.status}</div>
                                                <div className="time" style={{ fontSize: '12px' }}>{item.time}</div>

                                            </div>
                                        </div>

                                    </div>
                                ))
                            }
                            {
                                visible < dataBox.length &&
                                <div className="col-md-12 wrap-inner load-more text-center">
                                    <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3 mt-10" onClick={showMoreItems}><span>Load More</span></Link>
                                </div>
                            }
                        </div>
                        <div className="col-lg-3 col-md-4 col-12">

                            <div id="side-bar" className="side-bar style-2">
                                <div className='subtotals-cart'>
                                    <div className='total-amounn'>
                                        <h5 className='font-weight-normal'>Subtotal <span>(item 1 )</span> : <span><i class="fa-solid fa-indian-rupee-sign"></i> 500 <sup style={{fontSize:'12px'}}>00</sup> </span> </h5>

                                        <div className='w-100 mt-4'>
                                            <button className='sc-button style w-100 bag fl-button pri-3'>Proceed to Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='mb-3'>
                                        <h5 className='font-weight-normal'>Recommendations for all products: </h5>

                                    </div>
                                    {
                                        dataBox.slice(0, visible).map((item, index) => (
                                            <div className="sc-card-activity style1" key={index}>
                                                <div className="content">
                                                    <div className="media">
                                                        <Link to='/cart'>
                                                            <img src={item.img} alt="Axies" />
                                                        </Link>
                                                    </div>
                                                    <div className="infor">
                                                        <h5 className='font-weight-normal'> <Link to="/item-details-01">{item.title}</Link></h5>
                                                        <div className="status"><span><i class="fa-solid fa-indian-rupee-sign"></i> {item.status}</span> &nbsp; - &nbsp; <span><i class="fa-solid fa-indian-rupee-sign"></i> {item.status}</span> </div>
                                                        <div className="status"> {item.rate}</div>
                                                        <div className="time" style={{ backgroundColor: '#5142fc', fontSize: '12px', textAlign:'center', borderRadius:'12px' }}>
                                                            <Link to='/'>
                                                                <h6 className='font-weight-normal'>{item.addtocarts}</h6>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ShoppingCart;
