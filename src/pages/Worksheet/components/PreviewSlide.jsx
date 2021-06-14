import React from "react";

const PreviewSlide = ({ front, back }) => {
  console.log({front, back})
  return (
    <>
      {" "}
      <li>
        <div className="generatelayout1" style={{ marginRight: "10px" }}>
          {front.first.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {front.first.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{front.first.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{front.first.subtitle}</p>
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
            {front.first.isCover ? front.first.type : front.first.slide}
          </div>
        </div>
        <div className="generatelayout1" style={{ borderRight: "0px" }}>
          {front.second.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {front.second.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{front.second.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{front.second.subtitle}</p>
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
            {front.second.isCover ? front.second.type : front.second.slide}
          </div>
        </div>
        <div
          className="generatelayout1"
          style={{
            marginTop: "10px",
            marginRight: "10px",
            borderBottom: "0px",
          }}
        >
          {front.third.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {front.third.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{front.third.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{front.third.subtitle}</p>
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
            {front.third.isCover ? front.third.type : front.third.slide}
          </div>{" "}
        </div>
        <div
          className="generatelayout1"
          style={{ marginTop: "10px", borderRight: "0px", borderBottom: "0px" }}
        >
          {front.fourth.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {front.fourth.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{front.fourth.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{front.fourth.subtitle}</p>
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
            {front.fourth.isCover ? front.fourth.type : front.fourth.slide}
          </div>
        </div>
      </li>
      {back.first.slide !== '' ?  <li>
        <div className="generatelayout1" style={{ marginRight: "10px" }}>
          {back.first.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {back.first.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{back.first.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{back.first.subtitle}</p>
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
            {back.first.isCover ? back.first.type : back.first.slide}
          </div>
        </div>
        <div className="generatelayout1" style={{ borderRight: "0px" }}>
          {back.second.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {back.second.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{back.second.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{back.second.subtitle}</p>
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
          {back.second.isCover ? back.second.type : back.second.slide}
        </div>
        </div>
        <div
          className="generatelayout1"
          style={{
            marginTop: "10px",
            marginRight: "10px",
            borderBottom: "0px",
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
              <p style={{ whiteSpace: "pre-line" }}>{back.third.subtitle}</p>
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
            {back.third.isCover ? back.third.type : back.third.slide}
          </div>
        </div>
        <div
          className="generatelayout1"
          style={{ marginTop: "10px", borderRight: "0px", borderBottom: "0px" }}
        >
          {back.fourth.slide ? (
            <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
              {back.fourth.para}
            </p>
          ) : (
            <>
              {" "}
              <h2 style={{ whiteSpace: "pre-line" }}>{back.fourth.title}</h2>
              <p style={{ whiteSpace: "pre-line" }}>{back.fourth.subtitle}</p>
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
            {back.fourth.isCover ? back.fourth.type : back.fourth.slide}
          </div>
        </div>
      </li> : ""}
    </>
  );
};

export default PreviewSlide;
