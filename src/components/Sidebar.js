
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { BsTrophyFill } from 'react-icons/bs';
import { RiWirelessChargingLine } from 'react-icons/ri';
import { FcSportsMode } from 'react-icons/fc';
import { MdOutlineSportsCricket,MdSportsRugby } from 'react-icons/md';

import { BiTimeFive, BiTennisBall } from 'react-icons/bi';
import {GiSoccerBall, GiHockey, GiAmericanFootballHelmet,
     GiBoxingGloveSurprise,GiDart, GiEightBall, GiBowlingStrike} from 'react-icons/gi';
import {PiMedalBold, PiVolleyball, PiBaseballDuotone } from 'react-icons/pi';
//import {LiaBasketballBallSolid } from 'react-icons/li';
import {FaChess } from 'react-icons/fa';

import MainContent from './MainContent ';
import "./css/main.css"

const Sidebar = () => {
  const sidebarItems = [
    { name: 'Live Events', icon: <RiWirelessChargingLine  size="30"/>},
    { name: 'Upcoming Events',icon: <BiTimeFive  size="30"/> },
    { name: 'All Sports',icon: <GiBowlingStrike  size="30"/> },
    { name: 'Cricket',icon: <GiAmericanFootballHelmet  size="30"/> },
    { name: 'Tennis' ,icon: <BiTennisBall  size="30"/>},
    { name: 'Soccer' ,icon: <GiSoccerBall  size="30"/>},
    { name: 'Basketball',icon: <GiSoccerBall  size="30"/> },
    { name: 'Ice Hockey' ,icon: <GiHockey  size="30"/>},
    { name: 'Rugby Union',icon: <MdSportsRugby  size="30"/> },
    { name: 'Horse Racing',icon: <GiAmericanFootballHelmet  size="30"/> },
    { name: 'Greyhound Racing',icon: <PiMedalBold  size="30"/> },
    { name: 'Volleyball',icon: <PiVolleyball  size="30"/> },
    { name: 'Baseball',icon: <PiBaseballDuotone  size="30"/> },
    { name: 'Virtual Cricket',icon: <GiAmericanFootballHelmet  size="30"/> },
    { name: 'Boxing',icon: <GiBoxingGloveSurprise  size="30"/> },
    { name: 'Rugby league',icon: <MdSportsRugby  size="30"/> },
    { name: 'Darts',icon: <GiDart  size="30"/> },
    { name: 'Snooker',icon: <GiEightBall  size="30"/> },
    { name: 'Mixed martial Arts' ,icon: <GiBowlingStrike  size="30"/>},
    { name: 'Motor Sport',icon: <BsTrophyFill  size="30"/> },
    { name: 'Politics',icon: <FaChess  size="30"/> },
    { name: 'Netball',icon: <GiSoccerBall  size="30"/> },
    { name: 'Handball',icon: <PiVolleyball  size="30"/> },
  ];

  return (
    <>
    
    <div className="container-fluid  mySideBar mt-3 mb-3" style={{ marginBottom: '20px !important', display: 'flex', flexDirection: 'column' }}>
  <div className="row rowsidebar" style={{ flex: 1 }} >
    <div className='col-sm-3 col-md-3 col-lg-2'>
    {/*   <nav id="sidebar" className="sidebar text-white custom-font-sidebar" style={{ backgroundColor: "#3e3e40", height: '100%' }}>   */} 
       <nav id="sidebar" className="sidebar text-white custom-font-sidebar" style={{ backgroundColor: "#262626", height: '100%' }}>
        <div className="position-sticky">
          <ul className="nav flex-column">
            {sidebarItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#">
                  {item.icon} <span className='text-white'>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>

    <div className='col-sm-9 col-md-9 col-lg-10' style={{ height: '100%', overflowY: 'auto' }}>
      <MainContent/>
    </div>
  </div>
</div>

    <br/><br/> <br/><br/>
    </>
  );
};

export default Sidebar;

