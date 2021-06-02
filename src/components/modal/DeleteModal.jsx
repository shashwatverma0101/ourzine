import React from "react";
import { Row, Col, Divider, Input, Button } from "antd";
import * as $ from "jquery";
import "./DeleteModal.css";
import TickSquare from "../../Image/Tick Square.svg";
import CloseSquare from "../../Image/Close Square.svg";
import ProfileDelete from "../../Image/ProfileDelete.svg";

const DeleteModal = ({
  buttontext,
}) => {
  const popupfunc = () => {
    const modal = document.getElementById("DeleteAcModal");

    $("#DeleteAcModal").css({ display: "none" });
    window.onclick = function (event) {
      if (event.target == modal) {
        // modal.style.display = "none";
        $("#DeleteAcModal").css({ display: "none" });
      }
    };
  };

  return (
    <div id="DeleteAcModal" className="modal2">
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
              Are you sure you want to delete account?
            </h2>
            <p style={{ color: "#429F97", fontSize: "14px" }}>
              Deleting account will permanently delete your edited text.
            </p>
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
                onClick={() => popupfunc()}
              >
                Cancel
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
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
