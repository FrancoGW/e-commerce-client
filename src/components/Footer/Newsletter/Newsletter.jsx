import "./Newsletter.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
}from 'react-icons/fa';
import './Newsletter.scss'
const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign up for lastest updates and offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" name="" id="" />
                <button>Suscribe</button>
            </div>
            <div className="text">will be used in accordace with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div> 
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>

    </div>;
};

export default Newsletter;
