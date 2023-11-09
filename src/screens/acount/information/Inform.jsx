import React, { useState, useEffect } from "react";
import "./inform.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { UPDATEUSER } from "../../../redux/actions/action";

const Inform = () => {
  const getUser = useSelector((state) => state.accountreducer.login);
  const dispatch = useDispatch();

  const [user, setUser] = useState(getUser);
  const [lastName, setLastName] = useState(user.lastName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [nickName, setNickName] = useState(user.nickName);
  const [address, setAddress] = useState(user.address);
  const [pass, setPass] = useState("");
  const [passNew, setPassNew] = useState("");
  const [passCheck, setPassCheck] = useState("");
  const [phone, setPhone] = useState("");

  const updateUser = (e) => {
    if (
      lastName === "" ||
      firstName === "" ||
      nickName === "" ||
      address === "" ||
      phone === ""
    ) {
      notifyWarn("Vui lòng điền đầy đủ thông tin (*) !");
    } else if (pass !== "" || passNew !== "" || passCheck !== "") {
      if (pass !== e.pass) {
        notifyWarn("Mật khẩu không đúng!");
      } else if (passNew === "" || passCheck === "" || passNew !== passCheck) {
        notifyWarn("Mật khẩu mới không đúng!");
      } else {
        e.pass = passNew;
        e.lastName = lastName;
        e.firstName = firstName;
        e.nickName = nickName;
        e.phone = phone;
        e.address = address;
        e.carts = user[0].carts;
        dispatch(UPDATEUSER(e));
        notifySuccess("Cập nhật thành công");
        setPass("");
        setPassNew("");
        setPassCheck("");
      }
    } else {
      e.lastName = lastName;
      e.firstName = firstName;
      e.nickName = nickName;
      e.phone = phone;
      e.address = address;
      e.carts = user[0].carts;
      dispatch(UPDATEUSER(e));
      notifySuccess("Cập nhật thành công");
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
    setUser(getUser);
  }, [getUser]);
  console.log(user);
  return (
    <div className="informContainer">
      <ToastContainer />
      <Form>
        <div className="nameWrapper">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Họ *</Form.Label>
            <Form.Control
              type="text"
              value={user[0].lastName ? user[0].lastName : lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên *</Form.Label>
            <Form.Control
              type="text"
              value={user[0].firstName ? user[0].firstName : firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="nicknameWrapper">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tên hiển thị *</Form.Label>
            <Form.Control
              type="text"
              value={user[0].nickName ? user[0].nickName : nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone *</Form.Label>
            <Form.Control
              type="text"
              value={user[0].phone ? user[0].phone : phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Địa chỉ nhận hàng *</Form.Label>
          <Form.Control
            type="text"
            value={user[0].address ? user[0].address : address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Địa chỉ email *</Form.Label>
          <Form.Control type="email" value={user[0].email} />
        </Form.Group>

        <h5>THAY ĐỔI MẬT KHẨU</h5>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu hiện tại (bỏ trống nếu không đổi)</Form.Label>
          <Form.Control
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mật khẩu mới (bỏ trống nếu không đổi)</Form.Label>
          <Form.Control
            type="password"
            value={passNew}
            onChange={(e) => setPassNew(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Xác nhận mật khẩu mới</Form.Label>
          <Form.Control
            type="password"
            value={passCheck}
            onChange={(e) => setPassCheck(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => updateUser({ ...user[0] })}>LƯU THAY ĐỔI</Button>
      </Form>
    </div>
  );
};

export default Inform;
