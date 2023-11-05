import React, { useState } from "react";
import "./_carousel.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

const CarouselHover = (props) => {
  const [over, setOver] = useState(false);
  const data = props;

  return (
    <div
      className="imageHover"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <Link to={`/details/${data?.sp?.id}`}>
        <img src={over ? data?.sp?.image2 : data?.sp?.image1} alt="product" />
      </Link>
      <ProgressBar
        variant="danger"
        now={80}
        label={80 + "%"}
        style={
          data?.sp?.category.some((item) => item === "sale")
            ? { marginTop: "10px" }
            : { display: "none" }
        }
      />
      <p className="price">
        {data?.sp?.category.some((item) => item === "sale") ? (
          <>
            <span className="price__org">{data?.sp?.priceOrg}</span>{" "}
            <span className="price__sale">{data?.sp?.priceSale}</span>
            <span>Giá tốt</span>
          </>
        ) : (
          <>{data?.sp?.price}</>
        )}
      </p>
    </div>
  );
};

export default CarouselHover;
