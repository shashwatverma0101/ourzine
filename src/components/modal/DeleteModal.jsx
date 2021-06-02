import React from "react";
import { Row, Col, Divider, Input, Button } from "antd";
import * as $ from "jquery";
import "./DeleteModal.css";
import TickSquare from "../../Image/Tick Square.svg";
import CloseSquare from "../../Image/Close Square.svg";
import ProfileDelete from "../../Image/ProfileDelete.svg";

const DeleteModal = ({ msg1, msg2, btnTxt1, btnTxt2 ,showModal , onAccept, onReject}) => {
  return (
    <div id="DeleteAcModal" style ={{display : `${showModal ? "block" : ""}`}} className="modal2">
      <div className="modal-content2">
        {/* <div className="modal-header2">
      <img src={CloseSquare} className='close2' />
    </div> */}
        <div className="modal-body2">
          <div className="popupbody2">
            <img src={ProfileDelete} style={{ height: "107px" }} />
            <h2
              style={{
                color: "#429F97",
                fontSize: "24px",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              {msg1}
            </h2>
            <p style={{ color: "#429F97", fontSize: "14px" }}>{msg2}</p>
            <div>
              <Button
                style={{
                  fontWeight: "bold",
                  width: "auto",
                  height: "45px",
                  color: "#429F97",
                  backgroundColor: "#FFFFF0",
                  borderColor: "#429f97",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  float: "left",
                }}
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
                onClick = {onReject}
              >
                {btnTxt1}
              </Button>
              <Button
                style={{
                  fontWeight: "bold",
                  width: "auto",
                  height: "45px",
                  color: "#F5F5F5",
                  backgroundColor: "#429f97",
                  borderColor: "#429f97",
                  borderRadius: "12px",
                  marginRight: "20px",
                  float: "right",
                }}
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
                onClick={onAccept}
              >
                {btnTxt2}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
