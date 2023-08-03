// CricketPlayers.js
import React from "react";
import player1Image from "../img/main_img1.5.jpg";
import player2Image from "../img/main_img2.jpg";
import player3Image from "../img/main_img3.4.jpg";

const First_row = () => {
  return (
    <div style={{ margin: '0 !important' , padding: '0 !important' }}>
      <div className="row" style={{ margin: '0 !important', padding: '0 !important' }}>
        <div className="col-3">
          <img
            src={player1Image}
            alt="Player 1"
            className="img-fluid rounded"
            style={{ width: "100%", height: "170px", opacity: '0.9' }}
          />
        </div>
        <div className="col-6">
          <img
            src={player2Image}
            alt="Player 2"
            className="img-fluid rounded"
            style={{ height: "170px" }}
          />
        </div>
        <div className="col-3">
          <img
            src={player3Image}
            alt="Player 3"
            className="img-fluid rounded"
            style={{ width: "100%", height: "170px" }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default First_row;
