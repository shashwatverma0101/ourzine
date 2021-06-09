import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
// import './Signinstyle.css';
import Ourzinelogo from "../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../Image/Frame Girl.svg";
import { Link } from "react-router-dom";
import auth from "../../services/auth";
import Loader from "../../components/loader/Loader";
import { toast } from "react-toastify";
import "./Helpstyle.css";

const Help = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Row>
      {isLoading ? <Loader /> : ""}
      <Col span={12} style={{ backgroundColor: "#FFFFF0" }}>
        <div
          style={{
            color: "white",
            height: "967px",
            display: "block",
            backgroundColor: "#429f97",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <div>
            <img
              src={Ourzinelogo}
              style={{ height: "140px", width: "100%", marginTop: "70px" }}
            />
          </div>

          <div>
            <img
              src={Girlvector}
              style={{ height: "463px", width: "100%", marginTop: "115px" }}
            />
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div class="helpcontainer">
          <div class="helpcontents-centered">
            <div className="insidecontents">
              <h2 className="topicheading">What is Ourzine?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
            <div className="insidecontents">
              <h2 className="topicheading" style={{ marginTop: "60px" }}>
                How to create an Ourzin?
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
            <div className="insidecontents">
              <h2 className="topicheading" style={{ marginTop: "60px" }}>
                How to print an Ourzine?
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Help;
