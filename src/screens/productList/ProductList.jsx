import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarouselHover from "../../components/carouselHover/CarouselHover";
import {
  sale_data,
  polo_data,
  thun_data,
  somi_data,
  khoac_data,
  quandai_data,
  quanngan_data,
  phukien_data,
} from "../../data/data";
import "./productList.scss";

const ProductList = () => {
  const { keyword } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      switch (keyword) {
        case "sale":
          setData(sale_data);
          break;
        case "polo":
          setData(polo_data);
          break;
        case "thun":
          setData(thun_data);
          break;
        case "somi":
          setData(somi_data);
          break;
        case "khoac":
          setData(khoac_data);
          break;
        case "quandai":
          setData(quandai_data);
          break;
        case "quanngan":
          setData(quanngan_data);
          break;
        case "phukien":
          setData(phukien_data);
          break;
        default:
          break;
      }
    };
    getData();
  }, [keyword]);
  return (
    <div className="productsList">
      {data.map((product) => {
        return <CarouselHover sp={product} />;
      })}
    </div>
  );
};

export default ProductList;
