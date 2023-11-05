import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Logo from "../../assets/IMG_YameLG.png";
import ThongBao from "../../assets/IMG_DaThongBao.png";
import AdData from "../../data/AdData.js";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <ul className="list__content">
          <li>
            <img
              src={Logo}
              alt="logo"
              width={120}
              style={{ marginBottom: "10px" }}
            />
            <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
            <p>Liên hệ: (028) 7307 1441</p>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn-menu">
                Danh sách CH YAME trên toàn quốc
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {AdData.map((item) => {
                  return (
                    <div>
                      <Dropdown.Item href="#/action-1">
                        <h6>
                          <ApartmentIcon /> {item.location}
                        </h6>
                      </Dropdown.Item>
                      {item.branchlist.map((element) => {
                        return (
                          <>
                            <Dropdown.Item href="#/action-2">
                              <LocationOnIcon /> {element}
                            </Dropdown.Item>
                          </>
                        );
                      })}
                    </div>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <p>Giới thiệu về YaMe.vn</p>
            <p>Thông tin thời trang, khuyến mãi</p>
            <p>Tuyển dụng</p>
          </li>
          <li>
            <p>Quy chế hoạt động</p>
            <p>Điều khoản mua bán</p>
          </li>
          <li>
            <h6>CSKH</h6>
            <p>Than phiền/Chăm sóc khách hàng</p>
          </li>
          <li>
            <h6>FAQ</h6>
            <p>Vận chuyển</p>
            <p>Chính sách đổi trả</p>
            <p>Chính sách bảo hành</p>
            <p>Khách hàng VIP</p>
            <p>Đối tác cung cấp</p>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <div className="certif">
          <p>© 2023 - CÔNG TY TNHH YAME VN</p>
          <p>
            Giấy CNĐKDN: 0310874914 – Ngày cấp: 25/11/2011 - Cơ quan cấp: Phòng
            Đăng Ký Kinh Doanh – Sở Kế Hoạch và Đầu Tư TP.HCM
          </p>
          <p>
            Địa chỉ đăng ký kinh doanh: 766/3B-3C Sư Vạn Hạnh (Nối dài), Phường
            12, Quận 10, TP.HCM - Điện thoại: (028) 3868 4857 - Mua hàng: (028)
            7307 1441 - Email: cskh@yame.vn
          </p>
        </div>
        <div>
          <img src={ThongBao} alt="xac  nhan" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
