import React from "react";
import "./_listProduct.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CarouselHover from "../carouselHover/CarouselHover";

const ListProduct = (props) => {
  const data = props.sp;
  const data_slice = data.slice(0, 4);
  return (
    <div className="ListProductContainer">
      <div style={{ textAlign: "center", color: "black" }}>
        <h4>{props.title}</h4>
      </div>
      <div className="product-4p">
        {data_slice.map((item) => (
          <CarouselHover sp={item} />
        ))}
      </div>
      <div className="moreProduct" style={{ textAlign: "end" }}>
        <Link to={props.link}>
          <Button
            variant="contained"
            style={{
              background: "#343a40",
              fontWeight: "400",
              fontSize: "13px",
            }}
          >
            XEM THÊM CÁC SẢN PHẨM KHÁC
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ListProduct;
