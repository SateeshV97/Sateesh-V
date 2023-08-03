import React from 'react'
import img4 from '../img/main_img4.jpg'
import "./css/main.css"
import Card from './Card'
import ButtonRow from './ButtonRow'

import { RiWirelessChargingLine } from 'react-icons/ri';

const Table_row = () => {
  
  return (
    <>
     
      <div className="row mt-3">
        <div className="col-10 custom-font-card2" >
            
            <div className="row custom_card">
            <a className="nav-link" href="#">
            <h5 className='text-primary container-fluid'><RiWirelessChargingLine  size="30"/> LIVE EVENTS</h5>
                </a>
            </div>
            <div className="row custom_card">
                <div className="col-12">
                <Card title="Cricket" />
                </div>
            </div>

            <div className="row container-fluid mt-3">
                <ButtonRow name1="England" name2="Australia"/>
            </div>
            {/* set 2 ---------------------------------------------------------*/}
            <div className="row mt-2 custom_card">
                <div className="col-12">
                <Card title="Tennis" />
                </div>
            </div>

            <div className="row container-fluid mt-3">
                <ButtonRow name1="Durham " name2="Lancashire"/>
            </div>
            <div className="row container-fluid mt-3">
                <ButtonRow name1="Durham " name2="Lancashire"/>
            </div>
                {/* set 3------------------------------------------------------------------- */}
            <div className="row mt-2 custom_card">
                <div className="col-12">
                <Card title="Tennis" />
                </div>
            </div>

            <div className="row container-fluid mt-3">
                <ButtonRow name1="Durham " name2="Lancashire"/>
            </div>
            <div className="row container-fluid mt-3">
                <ButtonRow name1="Durham " name2="Lancashire"/>
            </div>

        </div>
         {/* -------------------------img------------------------------------------ */}
        <div className="col-2 ">
         
          <img
            src={img4}
            alt="IMg4"
            className="img-fluid rounded"
            style={{width: "100%", height: "750px" }}
          />
        </div>
      </div>

      <div class="row">
    <div class="col-sm-4 p-3  text-white"></div>
    <div class="col-sm-8 p-3  text-white"></div>
  </div>

    </>
  )
}

export default Table_row