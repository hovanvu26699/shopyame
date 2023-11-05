import React from "react";
import "./myAccount.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Address from "../address/Address";
import Inform from "../information/Inform";
const MyAccount = () => {
  return (
    <div className="accountContainer">
      <div className="accountMenu">
        <div className="accountAvatar">
          <AccountCircleIcon sx={{ fontSize: 80 }} />
          <span> meoho2000 </span>
        </div>
        <ul className="menuList">
          <li>TÀI KHOẢN</li>
          <li>ĐỊA CHỈ</li>
          <li>ĐƠN HÀNG</li>
        </ul>
      </div>
      <div>
        <Inform />
      </div>
    </div>
  );
};

export default MyAccount;
