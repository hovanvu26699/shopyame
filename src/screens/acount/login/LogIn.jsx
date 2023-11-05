import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./login.scss";

const LogIn = () => {
  return (
    <>
      <div className="mainTitle">
        <h3>TÀI KHOẢN</h3>
      </div>
      <div className="logIn">
        <div className="signin">
          <h5>ĐĂNG NHẬP</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Địa chỉ email *</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit">ĐĂNG NHẬP</Button>

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
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu *</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Xác nhận mật khẩu *</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type="submit">ĐĂNG KÝ</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
