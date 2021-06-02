import React, { useEffect, useState } from "react";
import "./PrintPopup.css";
import * as $ from "jquery";
import { Row, Col, Button, Form, Input, Space } from "antd";
import "../Worksheet.css";

const PrintPopup = ({sheet, defaultSheet}) => {
  const popupfunc = () => {
    const modal = document.getElementById("myModal");

    $("#myModal").css({ display: "none" });
    window.onclick = function (event) {
      if (event.target == modal) {
        // modal.style.display = "none";
        $("#myModal").css({ display: "none" });
      }
    };
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <div className="popupbody">
            <ul>
              <li>
                <div className="generatelayout">
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {defaultSheet.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {defaultSheet.subtitle}
                  </p>
                </div>
              </li>

              {sheet?.map((slides) => (
                <li key = {slides.slide}>
                  <div className="generatelayout">
                    <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                        {slides.para}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              fontWeight: "bold",
              width: "40%",
              height: "45px",
              color: "#F5F5F5",
              backgroundColor: "#429f97",
              borderColor: "#429f97",
            }}
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            className="login-form-button"
          >
            {" "}
            Generate Ourzine PDF{" "}
          </Button>
          <p
            onClick={() => popupfunc()}
            style={{
              color: "#429f97",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "6px",
            }}
          >
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrintPopup;
