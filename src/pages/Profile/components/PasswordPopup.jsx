import React from "react";
import { Row, Col, Divider,Input,Button } from "antd";
import * as $ from "jquery";
import './Popupstyles.css';
import TickSquare from '../../../Image/Tick Square.svg';
import CloseSquare from '../../../Image/Close Square.svg';
import ProfileDelete from '../../../Image/ProfileDelete.svg';


const PasswordPopup = ({showModal , onReject}) => {

  return (
    <div id="PasswordModal" className="modal1" style={{display : `${showModal ? "block" : ""}`}}>
      <div className="modal-content1">
      <div className="modal-header1">
      <img src={CloseSquare} className='close1'onClick={onReject } />
    </div>
        <div className="modal-body1">
          <div className="popupbody1"> 

          <img src={TickSquare} style={{height:'107px'}}/>
          <h2 style={{color:'#429F97',fontSize:'24px',marginTop:'20px',fontWeight:'bold'}}>Password Changed</h2>
          <p style={{color:'#429F97',fontSize:'14px'}}>Your password has been changed successfully</p>
          <Button
            style={{
              fontWeight: "bold",
              width: "auto",
              height: "45px",
              color: "#F5F5F5",
              backgroundColor: "#429f97",
              borderColor: "#429f97",
              borderRadius:'12px'
            }}
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            className="login-form-button"
            onClick={onReject}
          >
            Continue Editing
          </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PasswordPopup;
