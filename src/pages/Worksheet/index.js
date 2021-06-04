import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Divider,
  Row,
  Col,
  Button,
  Form,
  Input,
  Space,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  VideoCameraOutlined,
  FileAddOutlined,
  FileExcelOutlined,
  SaveOutlined,
  QuestionCircleOutlined,
  UploadOutlined,
  DownOutlined,
  EditOutlined,
  LogoutOutlined,
  DeleteOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import "./Worksheet.css";
// import './leftnavigation.css';
import Ourzinelogo from "../../Image/ourzinelogo.svg";
import * as $ from "jquery";
import "jquery-ui-bundle";
import Edit from "../../Image/Edit Square.svg";
import Print from "../../Image/Print.svg";
import AddSheet from "../../Image/AddSheet.svg";
import DeleteSheet from "../../Image/DeleteSheet.svg";
import Save from "../../Image/Save.svg";
import Delete from "../../Image/Delete.svg";
import Help from "../../Image/Help.svg";
import Ellipse from "../../Image/Ellipse 1.svg";
import ArrowRight from "../../Image/Arrow-Right.svg";
import ArrowLeft from "../../Image/Arrow-Left.svg";
import EditSquareGreen from "../../Image/EditSquareGreen.svg";
import Logout from "../../Image/Logout.svg";
import Sliderleft from "../../Image/Sliderleft.svg";
import Navigation from "../../components/navigation/Navigation";
import DangerTriangle from "../../Image/DangerTriangle.svg";
import worksheet from "../../services/worksheet";
import { toast } from "react-toastify";
import PrintPopup from "./components/PrintPopup";
import PrintDisable from "../../Image/PrintDisable.svg";
import AddSheetDisable from "../../Image/AddSheetDisable.svg";
import DeleteSheetDisable from "../../Image/DeleteSheetDisable.svg";
import SaveDisable from "../../Image/SaveDisable.svg";
import DeleteDisable from "../../Image/DeleteDisable.svg";
import HelpDisable from "../../Image/HelpDisable.svg";
import Loader from "../../components/loader/Loader";
import { useHistory } from "react-router-dom";
import DeleteModal from "../../components/modal/DeleteModal";

const { Header, Sider, Content } = Layout;
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
  const [totalSlide, setTotalSlide] = useState(1);
  const [resetSheet, setResetSheet] = useState(false);
  const [worksheetId, setWorksheetId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteSheetModal, setShowDeleteSheetModal] = useState(false);
  const history = useHistory();

  // const [checkDelete, setDeleteCheck] = useState(false)

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
          setTotalSlide(res.data.worksheet.para.length + 1);
          setWorksheetId(res.data.worksheet._id);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  }, []);

  useEffect(() => {
    let slideNumber = 1;
    setSheet([
      ...sheet.map((slides) => {
        slideNumber++;
        return { slide: slideNumber, para: slides.para };
      }),
    ]);
    // setDeleteCheck(true)
  }, [resetSheet]);

  // useEffect(() => {
  //   if(checkDelete && worksheetId){
  //     handleSave()
  //   }
  // }, [checkDelete])

  const sliderchange = () => {
    toggle();
    $(".box").animate({
      width: "toggle",
    });
  };

  const handleChangeInput = (slide, event) => {
    const newSheet = sheet.map((i) => {
      if (slide == i.slide) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setSheet(newSheet);
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
          setTotalSlide(res.data.worksheet.para.length + 1);
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
      setTotalSlide(1);
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
          setTotalSlide(1);
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
      <Layout style={{ height: "890px", display: "flex", backgroundColor : "#fffff0" }}>
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
              setOption("edit");
              setTotalSlide(totalSlide + 1);
              setSheet([...sheet, { slide: totalSlide + 1, para: "" }]);
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
          <button
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
          </button>
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
        <div class="box">
          <div class="box-inner">
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
              <li onClick={() => setCurrentSlide(1)}>
                <div className="small-left-layout">
                  <h2 style={{ whiteSpace: "pre-line" }}>
                    {defaultSheet.title}
                  </h2>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {defaultSheet.subtitle}
                  </p>
                </div>
              </li>
              {sheet?.map((slides) => (
                <li
                  key={slides.slide}
                  onClick={() => setCurrentSlide(slides.slide)}
                >
                  <div className="small-left-layout">
                    <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
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
              onClick={() =>
                setCurrentSlide(currentSlide - 1 === 0 ? 1 : currentSlide - 1)
              }
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
                    onChange={(e) => {
                      setDefaultSheet({
                        ...defaultSheet,
                        subtitle: e.target.value,
                      });
                    }}
                    value={defaultSheet.subtitle}
                    placeholder="Click to Add Subtitle"
                  ></textarea>
                </form>
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
                      className="maintextarea-dynamic"
                      value={slides.para}
                      onChange={(e) => {
                        handleChangeInput(slides.slide, e);
                      }}
                      placeholder="text here"
                      // maxlength = "15"
                    ></textarea>
                  </form>
                  <div
                    className="countcharacters"
                    style={{ marginTop: "130px" }}
                  >
                    <span className="countchars">{slides.para.length}</span>
                    /500
                  </div>
                </div>
              ) : (
                ""
              )
            )}

            <div
              className="sidearrow1"
              onClick={() => {
                if (currentSlide <= sheet.length)
                  setCurrentSlide(currentSlide + 1);
              }}
            >
              <div className="rightarrow">
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
