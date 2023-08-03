// Footer.js
import React from 'react';
import {BsWhatsapp, BsFacebook, BsLinkedin, BsTwitter, BsTelegram} from 'react-icons/bs'
import img1 from '../img/png/img1.png'
import img2 from '../img/png/img2.png'
import img3 from '../img/png/img3.png'
import img4 from '../img/png/img4.png'
import img5 from '../img/png/img5.png'
import img6 from '../img/png/img6.png'
const Footer = () => {
  const img_width=60;
  const img_hight=35;
  return (
    <footer className="footer" style={{fontSize:"11px", backgroundColor: "#262626"}}>
      <div className="dark-background" style={{ backgroundColor: "#262626"}}>
        <div className="container1">
          <div className="row" style={{marginLeft:'3px !important'}}>
            <div className="col ml-3" >
              <p>Responsible Gambling </p>
            </div>
            <div className="col">
              <p>|</p>
            </div>
            <div className="col">
              <p> Terms & Conditions</p>
            </div>
            <div className="col">
              <p>|</p>
            </div>
            <div className="col">
              <p>KYC Policy</p>
            </div>
            <div className="col">
              <p>|</p>
            </div>
            <div className="col">
              <p>About Us</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p >Accepted Mode of payment</p>
            </div>
            <div className="col">
              <img src={img1} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
            <div className="col">
            <img src={img2} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
            <div className="col">
            <img src={img3} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
            <div className="col">
            <img src={img4} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
            <div className="col">
            <img src={img5} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
            <div className="col">
            <img src={img6} alt="Footer Image" width={img_width} height={img_hight} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p><a href="#"><BsWhatsapp size="30"/></a></p>
            </div>
            <div className="col">
              <p><a href="#"><BsFacebook size="30"/></a></p>
            </div>
            <div className="col">
              <p><a href="#"><BsLinkedin size="30"/></a></p>
            </div>
            <div className="col">
              <p><a href="#"><BsTwitter size="30"/></a></p>
            </div>
            <div className="col">
              <p><a href="#"><BsTelegram size="30"/></a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
