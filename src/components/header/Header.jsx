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
            <Link to="/products/sale">MỚI MỞ BÁN</Link>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="btn-menu">
                ÁO POLO
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/products/polo">Áo PoLo Đơn Giản</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/products/polo">Áo Polo Thiết kế</Link>
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
                    <Dropdown.Item>
                      <Link to="/products/quandai">QUẦN TÂY</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai"> QUẦN DÀI BST THIẾT KẾ</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai">QUẦN DÀI BST THIẾT KẾ</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="">QUẦN JEAN</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Dáng Ôm</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Dáng Vừa</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Dáng Rộng</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/thun">ÁO THUN</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/thun"> Áo Thun Đơn Giản</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/thun">Áo Thun Thiết Kế</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/thun"> Kiểu Tay Dài Sweater</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/thun"> Phù Hợp Thể Thao</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/quandai">QUẦN DÀI ĐƠN GIẢN</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai">Kiểu Quần Jogger</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai">Lưng Gài</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai">Lưng Thun Ống Đứng</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quandai">Lưng Thun Ống Jogger</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/khoac">ÁO KHOÁC</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/khoac">Kiểu Có Nón</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/khoac">Kiểu Cổ Bẻ,Cổ Đứng</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/khoac">Kiểu Varsity</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/khoac">Kiểu Cardigan</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/khoac">Áo Hoodie</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/quanngan">QUẦN SHORT</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quanngan">Dài Trên Gối</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quanngan">Dài Tiêu Chuẩn</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quanngan">Kiểu Classic</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quanngan"> Kiểu Thể Thao</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/quanngan">Kiểu Boxer</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="">QUẦN LÓT</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Kiểu Tam Giác</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Kiểu Quần Đùi ngắn</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Kiểu Quần Đùi dài</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/phukien">PHỤ KIỆN</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/phukien">Dây Nịt Da</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/phukien">Ví Da</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/phukien">Nón</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/phukien"> Tất - Vớ</Link>
                    </Dropdown.Item>
                  </div>
                  <div>
                    <Dropdown.Item>
                      <Link to="">BALO/TÚI</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Balo Daily</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Balo Modern</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="">Túi</Link>
                    </Dropdown.Item>
                  </div>
                </div>
                <div>
                  <div>
                    <Dropdown.Item>
                      <Link to="/products/somi">ÁO SƠ MI</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Sợi Tre</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Sợi Cà Phê</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Cotton</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Sợi Rayon</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Sợi Modal</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Vải Sợi Đặc Biệt</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Áo sơ mi tay dài</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">Áo sơ mi tay ngắn</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/products/somi">
                        Áo sơ mi cổ Cuban / Danton
                      </Link>
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
