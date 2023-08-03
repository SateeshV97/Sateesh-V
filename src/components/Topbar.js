import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import profileLogo from './profile_logo.png';
import "./css/main.css"
import {FaBars   } from 'react-icons/fa';
import {IoIosSettings   } from 'react-icons/io';
import {GiSoccerBall, GiGamepad} from 'react-icons/gi';
import {RiWirelessChargingLine} from  'react-icons/ri';
import {MdCasino} from  'react-icons/md';
import {SiPocketcasts} from  'react-icons/si';
import {AiTwotonePropertySafety} from  'react-icons/ai';

const Topbar = () => {
return (
<nav className="navbar navbar-expand-lg text-white topbarBg" style={{backgroundColor: "#262626"}}>
    <div className="container-fluid">
    <div style={{backgroundColor:"white", marginRight:"10px"}}>

    <span className="navbar-toggler-icon active"></span>
    </div>
     
        <a className="navbar-brand" href="#">
            <h1>SP<span style={{color:"blue"}}>O</span>RTS</h1>
            
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
                <a className="nav-link text-primary" aria-current="page" href="#"><GiSoccerBall  size="30"/> Sport</a>
                <a className="nav-link" href="#"> <RiWirelessChargingLine  size="30"/> Live</a>
                <a className="nav-link" href="#"><MdCasino  size="30"/> Casino</a>
                <a className="nav-link" href="#"><SiPocketcasts  size="30"/> Live Casino</a>
                <a className="nav-link" href="#"><GiGamepad  size="30"/> Virtual Games  |</a>
                <a className="nav-link text-primary" href="#" ><AiTwotonePropertySafety  size="30"/> Promotion</a>
            </div>
        </div>
        <div className="navbar-nav">
        <button type="button" class="btn btn-primary custom-margin-right">Login</button> 
        <button type="button" class="btn btn-primary custom-margin-right">Rigister</button>
        <button type="button" class="btn btn-light"><IoIosSettings/></button>
           {/*  <img src={profileLogo} alt="Profile Logo" className="profile-logo" /> */}
        </div>
    </div>
</nav>
);
};

export default Topbar;

