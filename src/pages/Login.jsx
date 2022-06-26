import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/blog/thumb-8.png'

const Login = () => {

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
                                <h1 className="heading text-center">Login</h1>
                            </div>
                            <div className="breadcrumbs style2 d-none">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Login</li>
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
                            <h2 className="tf-title-heading ct style-1">
                                Login To Creat
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
                                        <input id="email" name="email" tabIndex="1" aria-required="true" required type="text" placeholder="Enter Your Email" />
                                        <input id="password" name="password" tabIndex="2" aria-required="true" type="email" placeholder="Enter Password" required />
                                        <div className="row-form style-1">
                                            <label>Remember me
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">Forgot Password ?</Link>
                                        </div>

                                        <button className="submit">Login</button>
                                    </form>
                                </div>

                            </div>

                        </div>
                        <div  className='col-12 m-auto py-5'>
                            <div className='text-center mt-5'>
                                <h4 className='font-weight-normal'>
                                    New to Creat? Create an Account
                                    <Link to='/' className='text-primary'> SignUp</Link>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
