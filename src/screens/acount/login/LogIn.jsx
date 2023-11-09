import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { SIGNUP, LOGIN } from "../../../redux/actions/action";
import { ToastContainer, toast } from "react-toastify";

import "./login.scss";

const LogIn = () => {
  const navigate = useNavigate();
  const getUsers = useSelector((state) => state.accountreducer.users);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passcheck, setPassCheck] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passLog, setPassLog] = useState("");

  const addUser = (user) => {
    const alive = users.some((item) => item.email === user.email);
    if (alive) {
      notifyWarn("Email đã đăng ký tài khoản!");
    } else if (pass !== passcheck) {
      notifyWarn("Mật khẩu không đúng!");
    } else {
      notifySuccess("Đăng ký thành công!");
      dispatch(SIGNUP(user));
      setEmail("");
      setPass("");
      setPassCheck("");
    }
  };
  const loginUser = (user) => {
    const alive = users.some(
      (item) => item.email === user.email && item.pass === user.pass
    );
    const account = users.find((e) => {
      return e.email === user.email && e.pass === user.pass;
    });
    if (alive) {
      dispatch(LOGIN(account));
      navigate("/");
    } else {
      notifyWarn("Email hoặc mật khẩu không đúng!");
    }
  };

  const notifyWarn = (message) =>
    toast.warn(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    setUsers(getUsers);
  }, [getUsers]);

  return (
    <>
      <ToastContainer />
      <div className="mainTitle">
        <h3>TÀI KHOẢN</h3>
      </div>
      <div className="logIn">
        <div className="signin">
          <h5>ĐĂNG NHẬP</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={emailLog}
                onChange={(e) => setEmailLog(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passLog}
                onChange={(e) => setPassLog(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={() => loginUser({ email: emailLog, pass: passLog })}
            >
              ĐĂNG NHẬP
            </Button>

            <Link to="">
              <Form.Text className="text-muted">Quên mật khẩu?</Form.Text>
            </Link>
          </Form>
        </div>
        <div className="signup">
          <h5>ĐĂNG KÝ</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Xác nhận mật khẩu *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={passcheck}
                onChange={(e) => {
                  setPassCheck(e.target.value);
                }}
              />
            </Form.Group>
            <Button onClick={() => addUser({ email, pass })}>ĐĂNG KÝ</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
