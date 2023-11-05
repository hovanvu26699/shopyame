import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_aCollection.scss";
import CarouselHover from "../carouselHover/CarouselHover";

import {
  sale_data,
  khoac_data,
  phukien_data,
  polo_data,
} from "../../data/data.js";

import Button from "@mui/material/Button";

const ACollection = (props) => {
  const item = props.product;
  const [p, setP] = useState([]);
  const [link, setLink] = useState();
  useEffect(() => {
    const getData = () => {
      switch (item.label) {
        case "sale":
          setP(sale_data);
          setLink("/products/sale");
          break;
        case "new":
          setP(khoac_data);
          setLink("/products/khoac");
          break;
        case "orgin":
          setP(phukien_data);
          setLink("/products/phukien");
          break;
        case "premium":
          setP(polo_data);
          setLink("/products/polo");
          break;
        default:
          break;
      }
    };
    getData();
  }, []);

  return (
    <div className="section-collection">
      <div className="box-img">
        <img src={item.banner} alt="banner" width={670} />
      </div>
      <div className="product">
        <div className="product__title">
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
        <div className="product__list">
          {p.slice(0, 6).map((item, i) => {
            return <CarouselHover sp={item} />;
          })}
        </div>
        <div
          className="moreProduct"
          style={{ textAlign: "end", marginTop: "10px" }}
        >
          <Link to={link}>
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
    </div>
  );
};

export default ACollection;
