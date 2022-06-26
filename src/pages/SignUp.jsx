import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CountrySelect from 'react-bootstrap-country-select'; 
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

const SignUp = () => {



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

    const [value, setValue] = useState(null);

    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Sign Up</h1>
                            </div>
                            <div className="breadcrumbs style2 d-none">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Sign Up</li>
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
                            <div className='list-majd flat-form mr-0'>
                                <ul className='list-unstyled'>
                                    <li className='my-5'><h3 className='font-weight-normal'>Thousands of 3d printable Designs</h3></li>
                                    <li className='my-5'><h3 className='font-weight-normal'>Organise your 3d files</h3></li>
                                    <li className='my-5'><h3 className='font-weight-normal'>Engage with the Conmmunity</h3></li>
                                    <li className='my-5'><h3 className='font-weight-normal'>Become a 3d Designs</h3></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <h2 className="tf-title-heading ct style-1">
                                Sign Up Your Creat Account
                            </h2>
                            <div className="flat-form box-login-social">
                                <div className="box-title-login">
                                    <h5>Login with social</h5>
                                </div>
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

                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5>Or login with email</h5>
                                </div>

                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <input id="email" name="email" tabIndex="1" aria-required="true" type="email" placeholder="Email Address" required />
                                        <input id="firstname" name="firstname" tabIndex="2" aria-required="true" required type="text" placeholder="First Name" />
                                        <input id="lastname" name="lastname" tabIndex="3" aria-required="true" required type="text" placeholder="Last Name" />
                                        <CountrySelect
                                            value={value}
                                            onChange={setValue}
                                            tabIndex="4"
                                            id='counrty'
                                        />
                                        <input id="username" name="username" tabIndex="5" aria-required="true" type="text" placeholder="User Name" required />
                                        <input id="setpass" name="setpass" tabIndex="6" aria-required="true" type="text" placeholder="Set Your Password" required />
                                        <input id="confirmpass" name="confirmpass" tabIndex="7" aria-required="true" type="text" placeholder="Confirm Password" required />
                                        <input id="date" name="date" tabIndex="8" aria-required="true" type="date" placeholder="Date of Birth" required />
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>
                                        <div className="row-form style-1">
                                            <label>
                                                By clicking the signup button below, you accept the creat <Link to="#" className="forgot-pass font-weight-normal text-primary">Terms of use </Link> and 
                                                 <Link to="#" className="forgot-pass font-weight-normal text-primary"> privacy policy</Link>
                                                 
                                            </label>
                                             
                                        </div>

                                        <button className="submit">Login</button>
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

export default SignUp;
