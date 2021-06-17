import React from "react";
import './PrintBooklet.css';

const PreviewSlide = ({ front, back }) => {
  return (
    <>
      {" "}
      {front.first.slide !== "" ? (
        <li>
          <div
           className="lichildsheetscontainer"
          >
            {front.first.isCover ? (
              <div
                className="sheetsideheading1"
              >
                {front.first.isCover ? front.first.type : ""}
              </div>
            ) : (
              <div style={{ marginLeft: "-4px", marginRight: "3px" }}></div>
            )}
            <div
              className="generatelayout1"
              style={{ marginRight: "0px", width: "-webkit-fill-available" }}
            >
              {front.first.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {front.first.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {front.first.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {front.first.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {front.first.isCover ? "" : front.first.slide-2}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "49%", marginTop: "-1px" }}>
            <div
              className="generatelayout1"
              style={{ borderRight: "0px", width: "100%" }}
            >
              {front.second.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {front.second.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {front.second.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {front.second.subtitle}
                  </p>
                </>
              )}

              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {front.second.isCover ? "" : front.second.slide-2}
              </div>
            </div>
            {front.second.isCover ? (
              <div
                className="sheetsideheading"
              >
                {front.second.isCover ? front.second.type : ""}
              </div>
            ) : (
              ""
            )}
          </div>

          <div
           className="lichildsheetscontainer"
          >
            {front.third.isCover ? (
              <div
                className="sheetsideheading1"
              >
                {front.third.isCover ? front.third.type : ""}
              </div>
            ) : (
              <div style={{ marginLeft: "-4px", marginRight: "3px" }}></div>
            )}
            <div
              className="generatelayout1"
              style={{
                marginTop: "10px",
                borderBottom: "0px",
                width: "-webkit-fill-available",
              }}
            >
              {front.third.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {front.third.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {front.third.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {front.third.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {front.third.isCover ? "" : front.third.slide-2}
              </div>{" "}
            </div>
          </div>
          <div style={{ display: "flex", width: "49%" }}>
            <div
              className="generatelayout1"
              style={{
                marginTop: "10px",
                borderRight: "0px",
                borderBottom: "0px",
                width: "100%",
              }}
            >
              {front.fourth.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {front.fourth.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {front.fourth.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {front.fourth.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {front.fourth.isCover ? "" : front.fourth.slide-2}
              </div>
            </div>
            {front.fourth.isCover ? (
              <div
                className="sheetsideheading"
              >
                {front.fourth.isCover ? front.fourth.type : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
      ) : (
        ""
      )}
      {back.first.slide !== "" ? (
        <li>
          <div
           className="lichildsheetscontainer"
          >
            {back.first.isCover ? (
              <div
                className="sheetsideheading1"
              >
                {back.first.isCover ? back.first.type : ""}
              </div>
            ) : (
              <div style={{ marginLeft: "-4px", marginRight: "3px" }}></div>
            )}

            <div
              className="generatelayout1"
              style={{ marginRight: "0px", width: "-webkit-fill-available" }}
            >
              {back.first.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {back.first.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>{back.first.title}</h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {back.first.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {back.first.isCover ? "" : back.first.slide-2}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", width: "49%", marginTop: "-1px" }}>
            <div
              className="generatelayout1"
              style={{ borderRight: "0px", width: "100%" }}
            >
              {back.second.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {back.second.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {back.second.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {back.second.subtitle}
                  </p>
                </>
              )}

              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {back.second.isCover ? "" : back.second.slide-2}
              </div>
            </div>
            {back.second.isCover ? (
              <div
                className="sheetsideheading"
              >
                {back.second.isCover ? back.second.type : ""}
              </div>
            ) : (
              ""
            )}
          </div>

          <div
           className="lichildsheetscontainer"
          >
            {back.third.isCover ? (
              <div
                className="sheetsideheading1"
              >
                {back.third.isCover ? back.third.type : ""}
              </div>
            ) : (
              <div style={{ marginLeft: "-4px", marginRight: "3px" }}></div>
            )}
            <div
              className="generatelayout1"
              style={{
                marginTop: "10px",
                borderBottom: "0px",
                width: "-webkit-fill-available",
              }}
            >
              {back.third.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {back.third.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>{back.third.title}</h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {back.third.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {back.third.isCover ? "" : back.third.slide-2}
              </div>{" "}
            </div>
          </div>
          <div style={{ display: "flex", width: "49%" }}>
            <div
              className="generatelayout1"
              style={{
                marginTop: "10px",
                borderRight: "0px",
                borderBottom: "0px",
                width: "100%",
              }}
            >
              {back.fourth.slide ? (
                <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
                  {back.fourth.para}
                </p>
              ) : (
                <>
                  {" "}
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {back.fourth.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {back.fourth.subtitle}
                  </p>
                </>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "100%",
                  left: "0px",
                }}
              >
                {back.fourth.isCover ? "" : back.fourth.slide-2}
              </div>
            </div>
            {back.fourth.isCover ? (
              <div
                className="sheetsideheading"
              >
                {back.fourth.isCover ? back.fourth.type : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default PreviewSlide;
