import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action.js";

import IMG_Mota from "../../assets/IMG_Mota.jpg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./details.scss";
import { data } from "../../data/data.js";

const Details = () => {
  const { id } = useParams();
  const [size, setSize] = useState("");
  const product = data.filter((item) => item.id === id);
  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const dispatch = useDispatch();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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

  const add = (e, size) => {
    if (size === "") {
      notifyWarn("Choose your size");
    } else {
      dispatch(ADD(e, size));
      notifySuccess("Cập nhật giỏ hàng thành công");
    }
  };

  return (
    <div className="detailsContainer">
      <ToastContainer />
      <div className="productInf">
        <div className="box-image">
          <img src={product[0].image2} alt="product" width={400} height={550} />
        </div>
        <div className="info">
          <h5>{product[0].title}</h5>
          <p>Mã số: #{product[0].id}</p>
          {product[0].price ? (
            <p className="price">{product[0].price} đ</p>
          ) : (
            <div>
              <p className="priceOrg">
                Giá gốc: <span>{product[0].priceOrg} </span> đ
              </p>
              <p className="priceSale">
                Giá Sale: <span>{product[0].priceSale}</span> đ
              </p>
            </div>
          )}

          <div className="actGroup">
            <Box sx={{ minWidth: 120 }} className="chooseSize">
              <FormControl size="small">
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={handleChange}
                >
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button
              variant="contained"
              color="success"
              onClick={() => add(product[0], size)}
            >
              ADD TO CART
            </Button>
          </div>
          <div className="describe">
            <p>Mô tả sản phẩm</p>
            <span> Chất liệu: French Terry</span>
            <span>Thành phần :100% cotton</span>
            <ul>
              <li>Thân thiện</li>
              <li>Thấm hút thoát ẩm</li>
              <li>Mềm mại</li>
              <li>Kiểm soát mùi</li>
              <li>Điều hòa nhiệt</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sampleList">
        <img src={IMG_Mota} alt="mau" />
        <img src={IMG_Mota} alt="mau" />
        <img src={IMG_Mota} alt="mau" />
        <img src={IMG_Mota} alt="mau" />
      </div>
    </div>
  );
};

export default Details;

// sign up
// data
