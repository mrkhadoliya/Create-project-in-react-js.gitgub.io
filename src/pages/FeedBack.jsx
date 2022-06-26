import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/blog/thumb-8.png'

const FeedBack = () => {

    const socialList = [
        {
            icon: "fa-brands fa-google",
            link: "#"
        },
        {
            icon: "fab fa-twitter",
            link: "#"
        },
        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fa-brands fa-instagram",
            link: "#"
        },
        {
            icon: "fa-brands fa-linkedin-in",
            link: "#"
        },
        {
            icon: "fa-brands fa-github",
            link: "#"
        },
    ]



    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">FeedBack</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>FeedBack</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-login tf-section">
                <div className="themesflat-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <div className="box-feature-contact">
                                <img src={img1} alt="Axies" />
                            </div>
                        </div>
                        <div className="col-12 col-md-8">

                            <div className="flat-form box-login-email">

                                <h2 className="tf-title-heading text-left ct style-1">
                                    Share Your FeedBack
                                </h2>
                                <p>we would love to hear your thoughts or freedback on how we can improve your experience using creat</p>

                                <div className="flat-form box-login-social">
                                    <div className="widget-social style-1 mg-t32 d-flex align-items-center justify-content-center">
                                        <ul>
                                            {
                                                socialList.map((item, index) => (
                                                    <li key={index}><Link to={item.link}><i className={item.icon}></i></Link></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <input id="fullname" name="name" tabIndex="1" aria-required="true" required type="text" placeholder="Full Name" />
                                        <input id="email" name="email" tabIndex="2" aria-required="true" required type="text" placeholder="Enter Your Email" />
                                         <select tabIndex="3" className='from_control' placeholder='select Subject'>
                                            <option>select Subject</option>
                                            <option>hello</option> 
                                         </select>
                                        <textarea placeholder='FeedBack'> 
                                        </textarea>
 

                                        <button className="submit">Send Message</button>
                                    </form>
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

export default FeedBack;
