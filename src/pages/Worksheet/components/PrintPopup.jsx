import React, { useEffect, useState, useRef } from "react";
import "./PrintPopup.css";
import * as $ from "jquery";
import ReactToPrint from "react-to-print";
import { Row, Col, Button, Form, Input, Space } from "antd";
import "../Worksheet.css";
import { breakSheetIntoCord } from "../../../utils/utils";
import PreviewSlide from "./PreviewSlide";
import PrintBooklet from "./PrintBooklet";

const PrintPopup = ({ sheet, defaultSheet }) => {
  const componentRef = useRef();

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
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <div className="popupbody">
              <ul>
                {breakSheetIntoCord(
                  sheet,
                  defaultSheet.title,
                  defaultSheet.subtitle
                )?.map((cord) => (
                  <PreviewSlide front={cord.front} back={cord.back} />
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <ReactToPrint
              trigger={() => (
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
              )}
              content={() => componentRef.current}
            />

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
        <div style = {{display : "none"}}>
        <PrintBooklet
          bookLet={breakSheetIntoCord(
            sheet,
            defaultSheet.title,
            defaultSheet.subtitle
          )}
          ref={componentRef}
        />
        </div>
      </div>
    </>
  );
};

export default PrintPopup;
