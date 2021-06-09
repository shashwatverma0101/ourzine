import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { Row, Col, Divider, Input, Form } from "antd";
import edit from "../../Image/edit.svg";
import CustomButton from "./components/CustomButton";
import userImage from "../../Image/userImage.svg";
import auth from "../../services/auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { LocalStorage } from "../../utils";
import PasswordLock from "../../Image/PasswordLock.svg";
import * as $ from "jquery";
import PasswordPopup from "./components/PasswordPopup";
import DeleteModal from "../../components/modal/DeleteModal";
import { BASE_API_URL } from "../../services/domain";
import "./Profile.css";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/auth";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../redux/actions/auth";
import { checkStrongPassword } from "../../utils/utils";

const Profile = ({ currentUser, updateCurrentUser }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showFullName, setShowFullName] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);

  useEffect(() => {
    if (currentUser) setName(currentUser.name);
  }, [currentUser]);

  const handleUploadProfilePic = (e) => {
    setIsLoading(true);
    let formData = new FormData();
    formData.append("profilepic", e.target.files[0]);

    auth
      .uploadProfile(formData)
      .then((res) => {
        setIsLoading(false);
        if (res.data.error) return toast.error("Something went wrong");
        if (res.data.result === true) window.location.href = "/profile";
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleDeleteUser = () => {
    setIsLoading(true);
    auth
      .deleteUser()
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          LocalStorage.ClearLocalstorage();
          updateCurrentUser(null);
          history.push("/");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleChangePassword = () => {
    if (weakPassword) return;
    if (newPassword !== confirmNewPassword)
      return toast.error("Password and Confirm Password should matched");
    setIsLoading(true);
    auth
      .changePasswordd({ currentPassword, newPassword })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "invalid")
          return toast.error("Password is incorrect");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          setShowPasswordModal(true);
          setShowChangePassword(false);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleUpdateProfile = () => {
    setIsLoading(true);
    auth
      .updateProfile({ name })
      .then((res) => {
        setIsLoading(false);
        if (res.data.result === "invalid") return toast.error("Invalid Update");
        if (res.data.result === "error")
          return toast.error("Something went wrong");
        if (res.data.result === true) {
          updateCurrentUser(res.data.user);
          setShowFullName(false);
          history.push("/worksheet");
        }
      })
      .catch((e) => {
        setIsLoading(false);
        toast.error("something went wrong");
      });
  };

  const Appendcss = () => {
    setTimeout(() => {
      $(".ant-input").css({ "background-color": "#c9e3e1", color: "#429f97" });
    }, 500);
  };

  return (
    <div style={{ backgroundColor: "#fffff0" }}>
      {isLoading ? <Loader /> : ""}
      <Navigation isEdit={true} />
      <PasswordPopup
        onReject={() => setShowPasswordModal(false)}
        showModal={showPasswordModal}
      />
      <DeleteModal
        onAccept={handleDeleteUser}
        onReject={() => setShowModal(false)}
        showModal={showModal}
        msg1="Are you sure you want to delete account?"
        msg2="Deleting account will permanently delete your edited text."
        btnTxt1="Cancel"
        btnTxt2="Delete"
      />
      <Row style={{ marginTop: "20px" }}>
        <Col span={1}></Col>
        <Col span={4}>
          <div style={{ width: "200px", height: "200px" }}>
            <img
              width="200px"
              height="200px"
              src={`${BASE_API_URL}/auth/get-profilepic/${
                currentUser ? currentUser._id : ""
              }`}
              style={{ borderRadius: "20px" }}
            />
          </div>
        </Col>
        <Col span={12}>
          <Col span={24}>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                marginTop: "16px",
              }}
            >
              Your Account
            </h1>
          </Col>

          <Col span={24}>
            <h2
              style={{ fontWeight: "700", fontSize: "24px", marginTop: "10px" }}
            >
              Name
            </h2>
          </Col>

          <Col span={24}>
            <Row>
              <Col span={5}>
                <Input
                  style={{
                    borderBottom: `${
                      showFullName == true ? "1px solid rgb(196, 196, 196)" : ""
                    }`,
                  }}
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="large"
                  className="site-form-item-fullname"
                  disabled={showFullName ? false : true}
                  placeholder={`${showFullName ? "" : "Full Name"} `}
                />
              </Col>
              <Col span={12}>
                <img
                  src={edit}
                  style={{ display: `${showFullName ? "none" : ""}` }}
                  onClick={() => setShowFullName(true)}
                />
              </Col>
              <Divider style={{ color: "#C4C4C4" }} />
            </Row>
          </Col>
        </Col>
        <Col span={7}></Col>
        <Col xs={{ offset: 1, span: 4 }} style={{ marginTop: "10px" }}>
          <input
            name="file"
            type="file"
            hidden
            className="profile-upload-input"
            onChange={(e) => handleUploadProfilePic(e)}
          />

          <CustomButton
            onClick={() =>
              document.getElementsByClassName("profile-upload-input")[0].click()
            }
            btnWidth={"195px"}
          >
            Update Image
          </CustomButton>
        </Col>

        <Col span={12}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Email Address
          </h1>
          <p>{currentUser ? currentUser.email : ""}</p>
          <Divider style={{ color: "#C4C4C4" }} />
        </Col>

        <Col span={7}></Col>

        <Col offset={5} span={12}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Password
          </h1>
          {showChangePassword ? (
            <>
              {" "}
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={handleChangePassword}
              >
                <div style={{ width: "50%", marginBottom: "20px" }}>
                  <Form.Item
                    name="CurrentPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Current Password",
                      },
                    ]}
                  >
                    <Input.Password
                      style={{
                        fontSize: "21px",
                        padding: "9px 9px 9px 19px",
                        borderRadius: "7px",
                        width: "345px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#C9E3E1",
                      }}
                      type="password"
                      // required
                      value={currentPassword}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                        checkStrongPassword(e.target.value)
                          ? setWeakPassword(false)
                          : setWeakPassword(true);
                      }}
                      size="large"
                      className="site-form-item-icon1"
                      prefix={<img src={PasswordLock} />}
                      placeholder="Current Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="NewPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your New Password",
                      },
                    ]}
                  >
                    <Input.Password
                      style={{
                        fontSize: "21px",
                        padding: "9px 9px 9px 19px",
                        borderRadius: "7px",
                        width: "345px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#C9E3E1",
                        marginTop: "-5px",
                      }}
                      // required
                      type="password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                      size="large"
                      className="site-form-item-icon1"
                      prefix={<img src={PasswordLock} />}
                      placeholder="New Password"
                    />
                  </Form.Item>
                  <p
                    style={{
                      fontSize: "12px",
                      color: `${weakPassword ? "#ff4d4f" : "#C9E3E1"}`,
                      marginBottom: "3px",
                      marginTop: "-16px",
                    }}
                  >
                    Use 8 or more characters with a mix of letters, numbers and
                    symbols
                  </p>

                  <Form.Item
                    name="ConfirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Confirm Password",
                      },
                    ]}
                  >
                    <Input.Password
                      style={{
                        fontSize: "21px",
                        padding: "9px 9px 9px 19px",
                        borderRadius: "7px",
                        width: "345px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#C9E3E1",
                        marginTop: "10px",
                      }}
                      type="password"
                      // required
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      size="large"
                      className="site-form-item-icon1"
                      prefix={<img src={PasswordLock} />}
                      placeholder="Confirm Password"
                    />
                  </Form.Item>
                </div>

                <Form.Item>
                  <CustomButton btnWidth={"150px"}>
                    Change Password
                  </CustomButton>
                </Form.Item>
              </Form>
            </>
          ) : (
            <CustomButton
              btnWidth={"150px"}
              onClick={() => {
                setShowChangePassword(true);
                Appendcss();
              }}
            >
              Change Password{" "}
            </CustomButton>
          )}
          <Divider style={{ color: "#C4C4C4" }} />
        </Col>
        <Col span={7}></Col>

        <Col offset={5} span={12}>
          <h1
            style={{
              fontWeight: "bold ",
              fontSize: "24px",
            }}
          >
            Delete Account
          </h1>
          <p>
            By deleting your account, you'll no longer be able to access any of
            your document on ourzine{" "}
          </p>
          <CustomButton onClick={() => setShowModal(true)} btnWidth={"130px"}>
            Delete Account{" "}
          </CustomButton>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "80px", paddingBottom: "5px" }}>
        <Col span={6}>
          <CustomButton
            onClick={() => history.push("/worksheet")}
            btnWidth="110px"
            radius="20px"
            btnHeight="39px"
          >
            Cancel
          </CustomButton>

          <button
            style={{
              fontWeight: "bold",
              width: `110px`,
              height: "39px",
              padding: "6px 0",
              marginLeft: "4px",
              backgroundColor: "#429F97",
              border: "#429F97 1px solid",
              borderRadius: `20px`,
              color: "#fff",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={handleUpdateProfile}
          >
            Save
          </button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentUser: (user) => dispatch(fetchCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
