import React, { useState , useEffect} from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
// import './Signinstyle.css';
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import auth from "../../../services/auth";
import Loader from "../../../components/loader/Loader";
import { toast } from "react-toastify";
import { isLogin } from "../../../utils";
import * as $ from "jquery";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  if (isLogin()) history.push("/worksheet");

  useEffect(() => {
    $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
  }, []);

  const handleForgotPassword = () => {
    setIsLoading(true);
    auth
      .forgotPassword({ email })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "notFound")
          return toast.error("Please enter registered email");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          toast.success(
            "Reset Password link has been sent to registered email id"
          );
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <Row>
      {isLoading ? <Loader /> : ""}
      <Col span={12}>
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
        <div class="imagecontainer">
          {/* <div id="ic"> */}
          <svg style={{ width: "100%", height: "962" }}>
            <rect
              width="100%"
              height="960"
              style={{ fill: "#FFFFF0", strokeWidth: "0", stroke: "rgb(0,0,0)" }}
            />
          </svg>
          <div class="textcentered" style={{ width: "auto", top: "43%" }}>
            <h1
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "40px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Forgot Password
            </h1>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={handleForgotPassword}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  style={{
                    fontSize: "21px",
                    padding: "9px 9px 9px 19px",
                    borderRadius: "7px",
                    width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="large"
                  className="site-form-item-icon1"
                  prefix={
                    <MailOutlined
                      className="site-form-item-icon"
                      style={{ color: "#429f97" }}
                    />
                  }
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item style={{ marginTop: "-12px" }}>
                <Link to={`/Forgotpassword`}>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Reset link would be sent on your Email
                  </a>
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    fontWeight: "bold",
                    width: "136px",
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
                  Submit{" "}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        {/* </div> */}
      </Col>
    </Row>
  );
};
export default Forgotpassword;
