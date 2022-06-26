import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import CardModal from './CardModal';
import './TopPicks.css'

import img1 from '../../assets/images/box-item/card-item-9.jpg'

const PrinterFind = () => {
    const [data] = useState(
        [
            {
                title: "Hamlet Contemplates Contemplates ",
                descriptions: "Description",
                printsizes: "Print Size",
                materials: "Material",
                others: "Other Details",
                locations: "Location:",
                stars: "4.89 (20 Review)",
                heart: "fa-solid fa-heart",
            },
            {
                title: "Hamlet Contemplates Contemplates ",
                descriptions: "Description",
                printsizes: "Print Size",
                materials: "Material",
                others: "Other Details",
                locations: "Location:",
                stars: "4.89 (20 Review)",
                heart: "fa-solid fa-heart",
            },
            {
                title: "Hamlet Contemplates Contemplates ",
                descriptions: "Description",
                printsizes: "Print Size",
                materials: "Material",
                others: "Other Details",
                locations: "Location:",
                stars: "4.89 (20 Review)",
                heart: "fa-solid fa-heart",
            },


        ]
    )

    const [visible, setVisible] = useState(10);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section today-pick">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-soft">
                                <div className="soft-left">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Price</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ margin: 0 }}>
                                            <Dropdown.Item href="#">
                                                <div className='sort-filter active'>
                                                    <span> All</span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div className='sort-filter'>
                                                    <span> Art</span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div className='sort-filter'>
                                                    <span> Photography</span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div className='sort-filter'>
                                                    <span> Music</span>
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Type of Place </span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: 0 }}>
                                            <Dropdown.Item href="#">
                                                <div className='sort-filter'>
                                                    <span>Price: Low to High</span>
                                                    <i className="fal fa-check"></i>
                                                </div></Dropdown.Item>
                                            <Dropdown.Item href="#"><div className='sort-filter'>
                                                <span>Price: High to Low</span>
                                                <i className="fal fa-check"></i>
                                            </div></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Free Cancellation</span>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Kitchen</span>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Air Conditioning</span>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Washing Machine</span>
                                        </Dropdown.Toggle>
                                    </Dropdown>

                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Wifi</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={{ margin: 0 }}>
                                            <Dropdown.Item href="#">Iron</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Free Parking</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: 0 }}>
                                            <Dropdown.Item href="#"> Dedicated workspace</Dropdown.Item>
                                            <Dropdown.Item href="#">Dryer</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="soft-right">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <span>Filter</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: 0 }}>
                                            <Dropdown.Item href="#">
                                                <span>Recently added</span>
                                                <i className="fal fa-check"></i>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#" className='active'>
                                                <span>Price: Low to High</span>
                                                <i className="fal fa-check"></i></Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <span>Price: High to Low</span>
                                                <i className="fal fa-check"></i>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                            {
                                data.slice(0, visible).map((item, index) => (
                                    <div key={index} className='fingprinters_box sc-card-product'>
                                        <div className="row">
                                            <div className="col-md-4 col-12 avatars">
                                                <Link to='/'><img src={img1} alt="Axies" className='rounded' /></Link>
                                            </div>
                                            <div className='col-md-8 col-12'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div className="info ml-4">
                                                        <h3 className='font-weight-normal'>Creator</h3>
                                                        <h6 className='font-weight-normal py-2'> {item.descriptions} </h6>
                                                        <h6 className='font-weight-normal'> {item.printsizes} </h6>
                                                        <h6 className='font-weight-normal py-2'> {item.materials} </h6>
                                                        <h6 className='font-weight-normal'> {item.others} </h6>
                                                        <h6 className='font-weight-normal py-2'> {item.locations} </h6>
                                                        <h6 className='font-weight-normal py-2'> <small><i class="fa-solid fa-star"></i></small> {item.stars} </h6>
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            <Link to='/'><i class={item.heart}></i></Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))
                            }
                        </div>


                        <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
                            <div className='sc-card-product'>
                                <div className='map-area'>
                                <h5>Google Map Ad</h5>
                                    <Link to='/'><img src={img1} alt="Axies" className='rounded w-100' /></Link>
                                </div>
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

export default PrinterFind;
