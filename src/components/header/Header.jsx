import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/IMG_YameLG.png";

import MenuIcon from "@mui/icons-material/Menu";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "react-bootstrap/Dropdown";
import "./_header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const getCart = useSelector((state) => state.cartreducer.carts);
  const [stickyClass, setStickyClass] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${search ? search : "empty"}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <div className={`header ${stickyClass}`}>
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="logo" width={66} />
        </Link>
      </div>
      <div className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn-menu">
                BỘ SƯU TẬP
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">SPEED</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Di Sản</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Japanese Horror Stories
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">The Day's Eye</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Y2010 Nguyên Bản
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Link to="/products/sale">SALE</Link>
          </li>
          <li>
            <a href="/">MỚI MỞ BÁN</a>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn-menu">
                ÁO POLO
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/products/polo">
                  Áo PoLo Đơn Giản
                </Dropdown.Item>
                <Dropdown.Item href="/products/polo">
                  Áo Polo Thiết kế
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn-menu">
                <MenuIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu className="menu-list">
                <div className="menu-left">
                  <div>
                    <Dropdown.Item href="/products/quandai">
                      QUẦN TÂY
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      QUẦN DÀI BST THIẾT KẾ
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      QUẦN DÀI BST THIẾT KẾ
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="">QUẦN JEAN</Dropdown.Item>
                    <Dropdown.Item href="">Dáng Ôm</Dropdown.Item>
                    <Dropdown.Item href="">Dáng Vừa</Dropdown.Item>
                    <Dropdown.Item href="">Dáng Rộng</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="/products/thun">ÁO THUN</Dropdown.Item>
                    <Dropdown.Item href="/products/thun">
                      Áo Thun Đơn Giản
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/thun">
                      Áo Thun Thiết Kế
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/thun">
                      Kiểu Tay Dài Sweater
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/thun">
                      Phù Hợp Thể Thao
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="/products/quandai">
                      QUẦN DÀI ĐƠN GIẢN
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      Kiểu Quần Jogger
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      Lưng Gài
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      Lưng Thun Ống Đứng
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quandai">
                      Lưng Thun Ống Jogger
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="/products/khoac">
                      ÁO KHOÁC
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/khoac">
                      Kiểu Có Nón
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/khoac">
                      Kiểu Cổ Bẻ,Cổ Đứng
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/khoac">
                      Kiểu Varsity
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/khoac">
                      Kiểu Cardigan
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/khoac">
                      Áo Hoodie
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="/products/quanngan">
                      QUẦN SHORT
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quanngan">
                      Dài Trên Gối
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quanngan">
                      Dài Tiêu Chuẩn
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quanngan">
                      Kiểu Classic
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quanngan">
                      Kiểu Thể Thao
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/quanngan">
                      Kiểu Boxer
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="">QUẦN LÓT</Dropdown.Item>
                    <Dropdown.Item href="">Kiểu Tam Giác</Dropdown.Item>
                    <Dropdown.Item href="">Kiểu Quần Đùi ngắn</Dropdown.Item>
                    <Dropdown.Item href="">Kiểu Quần Đùi dài</Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="/products/phukien">
                      PHỤ KIỆN
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/phukien">
                      Dây Nịt Da
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/phukien">
                      Ví Da
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/phukien">Nón</Dropdown.Item>
                    <Dropdown.Item href="/products/phukien">
                      Tất - Vớ
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item href="">BALO/TÚI</Dropdown.Item>
                    <Dropdown.Item href="">Balo Daily</Dropdown.Item>
                    <Dropdown.Item href="">Balo Modern</Dropdown.Item>
                    <Dropdown.Item href="">Túi</Dropdown.Item>
                  </div>
                </div>
                <div>
                  <div>
                    <Dropdown.Item href="/products/somi">
                      ÁO SƠ MI
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Sợi Tre
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Sợi Cà Phê
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Cotton
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Sợi Rayon
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Sợi Modal
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Vải Sợi Đặc Biệt
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Áo sơ mi tay dài
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Áo sơ mi tay ngắn
                    </Dropdown.Item>
                    <Dropdown.Item href="/products/somi">
                      Áo sơ mi cổ Cuban / Danton
                    </Dropdown.Item>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="header__icons">
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          size="small"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            style={{ background: "#fff", borderRadius: "20px" }}
            endAdornment={
              <InputAdornment position="end">
                <Link to={`/search/${search ? search : "empty"}`}>
                  <SearchIcon style={{ color: "#000" }} />
                </Link>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
        </FormControl>
        <div className="user">
          <Link to="/login">
            <PersonIcon style={{ color: "white" }} />
          </Link>
        </div>
        <div className="cart">
          <Link to="/carts">
            <LocalMallIcon style={{ color: "white" }} />
            <span id="countItem">{getCart.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
