import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
// import './Signupstyle.css';
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import auth from "../../../services/auth";
import { toast } from "react-toastify";

const Resetpassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const history = useHistory()

  const handleResetPassword = () => {
    if(password !== confirmPassword) return toast.error("Password and Confirm Password should be same")
    setIsLoading(true);
    auth
      .resetPassword({ token: match.params.token, newPassword: password })
      .then((res) => {
        setIsLoading(false)
        if (res.data.result === false)
          return toast.error("Please Verify your email");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          toast.success("Changed Password Successfully");
          history.push('/signin')
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
              style={{ fill: "white", strokeWidth: "0", stroke: "rgb(0,0,0)" }}
            />
          </svg>
          <div class="textcentered" style={{ width: "auto", top: "46%" }}>
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
              Reset Password
            </h1>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish = {handleResetPassword}
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
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
                    backgroundColor: "#C9E3E1",
                    
                  }}
                  type = "password"
                  value ={password}
                  onChange = {(e) => setPassword(e.target.value)}
                  size="large"
                  className="site-form-item-icon1"
                  prefix={
                    <LockOutlined
                      className="site-form-item-icon"
                      style={{ color: "#429f97" }}
                    />
                  }
                  placeholder="New Password"
                />
              </Form.Item>
              <p
                  style={{
                    fontSize: "12px",
                    color: "#C9E3E1",
                    marginBottom: "20px",
                    marginLeft : "15px",
                    marginTop: "-20px",
                  }}
                >
                  Use 8 or more characters with a mix of letters, numbers and
                  symbols
                </p>

              <Form.Item
                style={{ marginTop: "-5px", marginBottom: "30px" }}
                name="confirm"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  size="large"
                  type = "password"
                  style={{
                    fontSize: "21px",
                    padding: "9px 9px 9px 19px",
                    borderRadius: "7px",
                    width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#C9E3E1",
                  }}
                  prefix={
                    <LockOutlined
                      className="site-form-item-icon"
                      style={{ color: "#429f97" }}
                    />
                  }
                  value = {confirmPassword}
                  onChange = {(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
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
                  Submit
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
export default Resetpassword;
