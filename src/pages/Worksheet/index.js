import React, { useEffect, useState } from "react";
import { Layout, Menu, Slider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Worksheet.css";
// import './leftnavigation.css';
import * as $ from "jquery";
import "jquery-ui-bundle";

import Navigation from "../../components/navigation/Navigation";

import worksheet from "../../services/worksheet";
import { toast } from "react-toastify";
import PrintPopup from "./components/PrintPopup";

import Loader from "../../components/loader/Loader";
import { useHistory } from "react-router-dom";
import DeleteModal from "../../components/modal/DeleteModal";
import {
  ZoomPlus,
  ZoomMinus,
  ZoomSlider,
  PrintDisable,
  AddSheetDisable,
  DeleteSheetDisable,
  SaveDisable,
  DeleteDisable,
  HelpDisable,
  DangerTriangle,
  Edit,
  Print,
  AddSheet,
  DeleteSheet,
  Save,
  Delete,
  Help,
  Ellipse,
  ArrowRight,
  ArrowLeft,
  EditSquareGreen,
  Logout,
  Sliderleft,
  Ourzinelogo,
} from "../../Image";

const { Header, Sider, Content } = Layout;
let textsizes1 = 20;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
const Worksheet = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [option, setOption] = useState("edit");
  const [defaultSheet, setDefaultSheet] = useState({
    slide: 1,
    title: "",
    subtitle: "",
  });
  const [sheet, setSheet] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlide, setTotalSlide] = useState(2);
  const [resetSheet, setResetSheet] = useState(false);
  const [worksheetId, setWorksheetId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteSheetModal, setShowDeleteSheetModal] = useState(false);
  const [textsizes, settextsizes] = useState(20);
  const history = useHistory();

  const toggle = () => {
    setCollapsed(!collapsed);
    if (!collapsed) {
      $(".site-layout").css({ "margin-left": "25px" });
      $(".leftellipse").css({ width: "60px" });
    } else {
      $(".site-layout").css({ "margin-left": "25px" });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    worksheet
      .getRecentWorksheet()
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "notFound") return setWorksheetId("");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          setDefaultSheet({
            slide: 1,
            title: res.data.worksheet.title,
            subtitle: res.data.worksheet.subtitle,
          });
          setSheet(res.data.worksheet.para);
          setTotalSlide(res.data.worksheet.para.length + 2);
          setWorksheetId(res.data.worksheet._id);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  }, []);

  useEffect(() => {
    let slideNumber = 2;
    setSheet([
      ...sheet.map((slides) => {
        slideNumber++;
        return { slide: slideNumber, para: slides.para };
      }),
    ]);
  }, [resetSheet]);

  const sliderchange = () => {
    toggle();
    $(".box").animate({
      width: "toggle",
    });
  };

  const handleChangeInput = (slide, event) => {
    if (event.target.value.length <= 500) {
      const newSheet = sheet.map((i) => {
        if (slide == i.slide) {
          i[event.target.name] = event.target.value;
        }
        return i;
      });

      setSheet(newSheet);
    }
    if (event.target.value.length >= 500) {
      handleAddSheet();
    }
  };

  const handleAddSheet = () => {
    if (totalSlide < 64) {
      setTotalSlide(totalSlide + 1);
      setCurrentSlide(currentSlide + 1);
      setSheet([...sheet, { slide: totalSlide + 1, para: "" }]);
    }
  };

  const handleSave = () => {
    setIsLoading(true);
    // setDeleteCheck(false)
    worksheet
      .saveWorksheet({
        worksheetId,
        title: defaultSheet.title,
        subtitle: defaultSheet.subtitle,
        para: sheet,
      })
      .then((res) => {
        setIsLoading(false);

        if (res.data.result === "notFound") return setWorksheetId("");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          setDefaultSheet({
            slide: 1,
            title: res.data.worksheet.title,
            subtitle: res.data.worksheet.subtitle,
          });
          setSheet(res.data.worksheet.para);
          setTotalSlide(res.data.worksheet.para.length + 2);
          setWorksheetId(res.data.worksheet._id);
          setOption("edit");
        }
      })
      .catch((e) => {
        setIsLoading(false);

        toast.error("Something went wrong");
      });
  };

  const handleDeleteSlide = () => {
    setShowModal(false);
    setResetSheet(!resetSheet);
    setCurrentSlide(currentSlide - 1);
    setTotalSlide(totalSlide - 1);
    setSheet([...sheet.filter((slides) => slides.slide !== currentSlide)]);

    setOption("edit");
  };

  const handleWorksheetDelete = () => {
    if (!worksheetId) {
      setDefaultSheet({
        slide: 1,
        title: "",
        subtitle: "",
      });
      setSheet([]);
      setCurrentSlide(1);
      setTotalSlide(2);
      setResetSheet(false);
      setWorksheetId("");
      setShowDeleteSheetModal(false);
      setOption("edit");
      return;
    }
    setIsLoading(true);
    worksheet
      .deleteWorksheet(worksheetId)
      .then((res) => {
        setShowDeleteSheetModal(false);
        setIsLoading(false);
        if (res.data.result === "notFound")
          return toast.error("Worksheet Not Found");
        if (res.data.result === true) {
          setDefaultSheet({
            slide: 1,
            title: "",
            subtitle: "",
          });
          setSheet([]);
          setCurrentSlide(1);
          setTotalSlide(2);
          setResetSheet(false);
          setWorksheetId("");
          setOption("edit");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const popupfunc = () => {
    var modal = document.getElementById("myModal");
    $("#myModal").css({ display: "block" });
    window.onclick = function (event) {
      if (event.target == modal) {
        $("#myModal").css({ display: "none" });
      }
    };
  };

  const onChange1 = () => {
    console.log(textsizes1);
    $(".maintextarea-dynamic").css("font-size", (textsizes1 += 1));
    settextsizes(textsizes1);
  };
  const onSlideChange = (value) => {
    $(".maintextarea-dynamic").css("font-size", value + "px");
    textsizes1 = value;
    settextsizes(value);
  };

  const onAfterChange1 = () => {
    console.log(textsizes1);
    $(".maintextarea-dynamic").css("font-size", (textsizes1 -= 1));
    settextsizes(textsizes1);
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Navigation />
      <DeleteModal
        onAccept={handleDeleteSlide}
        onReject={() => {
          setShowModal(false);
          setOption("edit");
        }}
        msg1="Are you sure you want to remove page?"
        msg2="You will loose all the edits done on this page."
        btnTxt1="Cancel"
        btnTxt2="Delete"
        showModal={showModal}
      />
      <DeleteModal
        onAccept={handleWorksheetDelete}
        onReject={() => {
          setShowDeleteSheetModal(false);
          setOption("edit");
        }}
        msg1="Are you sure you want to delete document?"
        msg2="You no longer would be able to restore this document"
        btnTxt1="Cancel"
        btnTxt2="Delete"
        showModal={showDeleteSheetModal}
      />

      <PrintPopup sheet={sheet} defaultSheet={defaultSheet} />
      <Layout
        style={{ height: "890px", display: "flex", backgroundColor: "#fffff0" }}
      >
        <div id="mainleftnav">
          <button
            className={`leftcontents ${option === "edit" ? "active" : ""}`}
            onClick={() => {
              setOption("edit");
              history.push("/worksheet");
            }}
          >
            <img src={Edit} style={{ marginLeft: "14px" }} />
            Edit
          </button>
          <button
            className={`leftcontents ${option === "print" ? "active" : ""}`}
            onClick={() => {
              setOption("print");
              popupfunc();
            }}
            disabled={
              defaultSheet.title || defaultSheet.subtitle ? false : true
            }
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle
                  ? Print
                  : PrintDisable
              }
              style={{
                marginLeft: "14px",
              }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              Print
            </span>
          </button>
          <button
            className={`leftcontents ${option === "addSheet" ? "active" : ""}`}
            disabled={
              defaultSheet.title || defaultSheet.subtitle ? false : true
            }
            onClick={() => {
              if (totalSlide < 64) {
                setOption("edit");
                setTotalSlide(totalSlide + 1);
                setSheet([...sheet, { slide: totalSlide + 1, para: "" }]);
              }
            }}
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle
                  ? AddSheet
                  : AddSheetDisable
              }
              style={{ marginLeft: "14px" }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              Add sheet
            </span>
          </button>
          {/* Delete slide when onClick {Old Figma Design} */}
          {/* <button
            disabled={
              defaultSheet.title || defaultSheet.subtitle ? false : true
            }
            className={`leftcontents ${
              option === "deleteSheet" ? "active" : ""
            }`}
            onClick={() => {
              if (currentSlide !== 1) {
                setOption("deleteSheet");
                setShowModal(true);
              }
            }}
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle
                  ? DeleteSheet
                  : DeleteSheetDisable
              }
              style={{ marginLeft: "14px" }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              {" "}
              Delete sheet
            </span>
          </button> */}
          <button
            className={`leftcontents ${option === "save" ? "active" : ""}`}
            onClick={() => {
              setOption("save");
              handleSave();
            }}
            disabled={
              defaultSheet.title || defaultSheet.subtitle ? false : true
            }
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle ? Save : SaveDisable
              }
              style={{ marginLeft: "14px" }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              {" "}
              Save{" "}
            </span>
          </button>
          <button
            className={`leftcontents ${option === "delete" ? "active" : ""}`}
            onClick={() => {
              setOption("delete");
              setShowDeleteSheetModal(true);
            }}
            disabled={
              defaultSheet.title || defaultSheet.subtitle ? false : true
            }
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle
                  ? DeleteSheet
                  : DeleteSheetDisable
              }
              style={{ marginLeft: "14px" }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              {" "}
              Delete
            </span>
          </button>
          <button
            className={`leftcontents ${option === "help" ? "active" : ""}`}
            onClick={() => {
              setOption("help");
              history.push("/help");
            }}
          >
            <img
              src={
                defaultSheet.title || defaultSheet.subtitle ? Help : HelpDisable
              }
              style={{ marginLeft: "14px" }}
            />
            <span
              style={{
                color: `${
                  defaultSheet.title || defaultSheet.subtitle ? "" : "#429f97"
                }`,
              }}
            >
              {" "}
              Help{" "}
            </span>
          </button>
        </div>
        <div className="box">
          <div className="box-inner">
            <div
              style={{
                fontWeight: "700",
                marginTop: "5px",
                marginLeft: "16px",
                fontSize: "12px",
                color: "#C9E3E1",
                marginBottom: "-4px",
              }}
            >
              {totalSlide}/64
            </div>

            <ul
              style={{
                height: "860px",
                width: "82%",
                overflow: "hidden",
                overflowY: "scroll",
                listStyleType: "decimal",
                marginTop: "7px",
              }}
            >
              <li
                onClick={() => {
                  setCurrentSlide(1);
                  settextsizes(20);
                }}
              >
                <div className="small-left-layout" >
                  <h2 style={{ whiteSpace: "pre-line", fontWeight: "700" }}>
                    {defaultSheet.title
                      ? defaultSheet.title
                      : "CLICK TO ADD TITLE"}
                  </h2>
                  <p style={{ whiteSpace: "pre-line", fontWeight: "400" }}>
                    {defaultSheet.subtitle
                      ? defaultSheet.subtitle
                      : "CLICK TO ADD SUBTITLE"}
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      width: "100%",
                      marginLeft: "-6px",
                    }}
                  >
                    FRONT COVER
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  setCurrentSlide(2);
                  settextsizes(20);
                }}
              >
                <div className="small-left-layout">
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      width: "100%",
                      marginLeft: "-6px",
                    }}
                  >
                    INSIDE FRONT COVER
                  </div>{" "}
                </div>
              </li>

              {sheet?.map((slides) => (
                <li
                  key={slides.slide}
                  onClick={() => {
                    setCurrentSlide(slides.slide);
                    settextsizes(20);
                  }}
                >
                  <div className="small-left-layout">
                    <p
                      className="left-layout-para"
                      style={{
                        textAlign: "left",
                        whiteSpace: "pre-line",
                        overflowY: "scroll",
                        maxHeight: "175px",
                      }}
                    >
                      {slides.para}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ position: "relative", top: "40%", maxHeight: "130px" }}>
          <img
            src={Sliderleft}
            onClick={sliderchange}
            style={{ marginLeft: "-2px" }}
          />
        </div>

        <div style={{ width: "100%", display: "grid" }}>
          {/* <div
            className="alerttext "
            style={{ textAlign: "center", backgroundColor: "#EB5757" }}
          >
            <img src={DangerTriangle} style={{ marginRight: "19px" }} />
            The text has exceeded the maximum printing limit. Extended text will
            NOT be included in the printed version.
          </div> */}

          <div
            style={{
              width: "100%",
              backgroundColor: "#fffff0",
              display: "flex",
              // marginTop: "-35px",
            }}
          >
            <div
              className="sidearrow"
              onClick={() => {
                setCurrentSlide(currentSlide - 1 === 0 ? 1 : currentSlide - 1);
                settextsizes(20);
              }}
            >
              <div className="leftarrow">
                <img className="leftellipse" src={Ellipse} />
                <div>
                  <img src={ArrowLeft} />
                </div>
              </div>
            </div>
            {currentSlide === defaultSheet.slide ? (
              <div className="site-layout" style={{}}>
                <textarea
                  name="limitedtextarea1"
                  className="textareaheading"
                  placeholder="Click to Add Title"
                  value={defaultSheet.title}
                  onChange={(e) =>
                    setDefaultSheet({ ...defaultSheet, title: e.target.value })
                  }
                >
                  {" "}
                </textarea>
                <form name="myform">
                  <textarea
                    name="limitedtextarea"
                    className="maintextarea"
                    value={defaultSheet.subtitle}
                    placeholder="Click to Add Subtitle"
                    onKeyPress={(e) => {
                      if (
                        e.key === "Enter" &&
                        (defaultSheet.title.length ||
                          defaultSheet.subtitle.length)
                      ) {
                        handleAddSheet();
                        setCurrentSlide(currentSlide + 2)
                      }
                    }}
                    onChange={(e) => {
                      setDefaultSheet({
                        ...defaultSheet,
                        subtitle: e.target.value,
                      });
                    }}
                  ></textarea>
                </form>
                <div style={{ textAlign: "center", marginTop: "-6px" }}>
                  FRONT COVER
                </div>
                <div className="countcharacters">
                  <span className="countchars">0</span>
                  /500
                </div>
              </div>
            ) : (
              ""
            )}

            {currentSlide === 2 ? (
              <div className="site-layout" style={{}}>
                <form name="myform">
                  <textarea
                    name="limitedtextarea"
                    className="maintextarea"
                    disabled={true}
                  ></textarea>
                </form>
                <div style={{ textAlign: "center", marginTop: "65px" }}>
                  INSIDE FRONT COVER
                </div>
                <div className="countcharacters">
                  <span className="countchars">0</span>
                  /500
                </div>
              </div>
            ) : (
              ""
            )}

            {sheet?.map((slides) =>
              slides.slide === currentSlide ? (
                <div className="site-layout" style={{}} key={slides.slide}>
                  <form name="myform">
                    <textarea
                      id={`#mytextarea-${slides.slide}`}
                      name="para"
                      autoFocus
                      className="maintextarea-dynamic"
                      value={slides.para}
                      onChange={(e) => {
                        handleChangeInput(slides.slide, e);
                      }}
                      placeholder="text here"
                      onKeyDown={(e) => {
                        if (e.keyCode === 8 && !slides.para.length) {
                          setShowModal(true);
                        }
                      }}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && slides.para.length > 500) {
                          handleAddSheet();
                        }
                      }}
                      // maxlength = "15"
                    ></textarea>
                  </form>
                  <div style={{ marginTop: "75px", textAlign: "center" }}>
                    {slides.slide - 2}{" "}
                  </div>
                  <div
                    className="countcharacters"
                    style={{ marginTop: "32px" }}
                  >
                    <span className="countchars">{slides.para.length}</span>
                    /500
                  </div>
                </div>
              ) : (
                ""
              )
            )}

            <div className="sidearrow1">
              <div className="zoombuttons">
                <img
                  className="zoom-minus"
                  src={ZoomMinus}
                  style={{ height: "23px" }}
                  onClick={() =>
                    //  {setzoomslidetype('decrease');setzoomsliderchange(!zoomsliderchange)}
                    onAfterChange1()
                  }
                />
                <Slider
                  defaultValue={20}
                  value={textsizes}
                  onChange={onSlideChange}
                  className="slidertext"
                  style={{ margin: "5px 5px 0px 5px", width: "110px" }}
                />
                {/* <img src={ZoomSlider} style={{height:'10px',margin:'5px 5px 0px 5px'}} /> */}
                <img
                  className="zoom-plus"
                  src={ZoomPlus}
                  style={{ height: "23px" }}
                  onClick={() =>
                    //  {setzoomslidetype('increase');setzoomsliderchange(!zoomsliderchange)}
                    onChange1()
                  }
                />
              </div>
              <div
                className="rightarrow"
                onClick={() => {
                  if (currentSlide <= sheet.length) {
                    setCurrentSlide(currentSlide + 1);
                    settextsizes(20);
                  }
                }}
              >
                <img src={Ellipse} />
                <div>
                  <img src={ArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Worksheet;
