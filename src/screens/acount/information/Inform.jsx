import React from "react";
import "./inform.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Inform = () => {
  return (
    <div className="informContainer">
      <Form>
        <div className="nameWrapper">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Họ *</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên *</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tên hiển thị *</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            <i>
              Tên này sẽ hiển thị trong trang Tài khoản và phần Đánh giá sản
              phẩm
            </i>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Địa chỉ email *</Form.Label>
          <Form.Control type="email" value="meoho2000@gmail.com" />
        </Form.Group>

        <h5>THAY ĐỔI MẬT KHẨU</h5>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu hiện tại (bỏ trống nếu không đổi)</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu mới (bỏ trống nếu không đổi)</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Xác nhận mật khẩu mới</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button type="submit">LƯU THAY ĐỔI</Button>
      </Form>
    </div>
  );
};

export default Inform;
