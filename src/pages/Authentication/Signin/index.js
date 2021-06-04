import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Space } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./Signinstyle.css";
import Ourzinelogo from "../../../Image/Rorshoklogowhite.svg";
import Girlvector from "../../../Image/Frame Girl.svg";
import { Link, useHistory } from "react-router-dom";
import { apiPost } from "../../../utils/axios.js";
import auth from "../../../services/auth";
import { toast } from "react-toastify";
import { isLogin, LocalStorage } from "../../../utils";
import Loader from "../../../components/loader/Loader";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  if(isLogin()) history.push('/worksheet')

  const handleSignIn = () => {
    setIsLoading(true);
    auth
      .signin({ email, password })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "notExist")
          return toast.error("This email does not exist");
        if (res.data.result === "invalid")
          return toast.error("Password is invalid");
        if (res.data.result === "error")
          return toast.error("Something went wrong");

        if (res.data.result === true) {
          if(!res.data.user.isVerified) return toast.error("Please Verify Your Account")
          LocalStorage.StoreToken(res.data.user.token);
          history.push("/worksheet");
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
            display: "grid",
            backgroundColor: "#429f97",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          {/* <h3 style={{color:'#F5F5F5',fontSize:'27px',textAlign:'center',marginTop:'45px'}}>What is Ourzine?</h3> */}
          <div>
            <img
              src={Ourzinelogo}
              style={{ height: "140px", width: "100%", marginTop: "118px" }}
            />
          </div>
          {/* <svg style={{width:"100%", height:"962"}} >
  <rect width="100%" height="960" style={{fill:'#336699',strokeWidth:'0',rx:'20',stroke:'rgb(0,0,0)'}} />  
</svg> */}
          <div
            style={{
              width: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            <h1
              style={{ color: "#F5F5F5", fontSize: "40px", fontWeight: "700" }}
            >
              Welcome,Writer!
            </h1>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}
            >
              Enter your credentials to access Ourzine{" "}
            </p>
            <p
              style={{ fontSize: "20px", color: "#F5F5F5", marginTop: "-10px" }}
            >
              <b>OR</b>
            </p>
            <p
              style={{ marginTop: "-10px", fontSize: "17px", color: "#C9E3E1" }}
            >
              Create an account{" "}
            </p>
            <Link to={`/signup`}>
              {" "}
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
                className="login-form-button"
                style={{
                  color: "#F5F5F5",
                  backgroundColor: "#429f97",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  borderColor: "#F5F5F5",
                  width: "136px",
                  height: "45px",
                }}
              >
                Sign up{" "}
              </Button>
            </Link>
          </div>
          <div>
            <img src={Girlvector} style={{ height: "458px", width: "100%" }} />
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
          <div class="textcentered" style={{ width: "auto", top: "40%" }}>
            <h3
              style={{
                color: "#429f97",
                fontWeight: "700px",
                fontSize: "24px",
                fontWeight: "700",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "98px",
              }}
            >
              What is Ourzine?
            </h3>
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
              Login to Ourzine
            </h1>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish = {handleSignIn}
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
                  size="large"
                  className="site-form-item-icon1"
                  prefix={
                    <MailOutlined
                      className="site-form-item-icon"
                      style={{ color: "#429f97" }}
                    />
                  }
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  style={{
                    fontSize: "21px",
                    padding: "9px 15px 9px 19px",
                    borderRadius: "7px",
                    width: "345px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#c9e3e1",
                  }}
                  prefix={
                    <LockOutlined
                      className="site-form-item-icon"
                      style={{ color: "#429f97" }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item style={{ marginTop: "-7px" }}>
                <Link to={`/Forgotpassword`}>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{
                      color: "#429f97",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Forgot password ?
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
                  Login{" "}
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
export default Signin;
