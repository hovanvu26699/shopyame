import React, { useState } from "react";
import "./myAccount.scss";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inform from "../information/Inform";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../../redux/actions/action";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const MyAccount = () => {
  const navigate = useNavigate();
  const getUser = useSelector((state) => state.accountreducer.login);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    dispatch(LOGOUT());
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="accountContainer">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Bạn chắc chắn muốn đăng xuất không?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={logOut} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <div className="accountMenu">
        <div className="accountAvatar">
          <AccountCircleIcon sx={{ fontSize: 80 }} />
          <span>
            {getUser[0].nickName ? getUser[0].nickName : getUser[0].email}
          </span>
        </div>
        <ul className="menuList">
          <li>TÀI KHOẢN</li>
          <li>ĐƠN HÀNG</li>
          <li onClick={handleClickOpen}>ĐĂNG XUẤT</li>
        </ul>
      </div>
      <div>
        <Inform />
      </div>
    </div>
  );
};

export default MyAccount;
