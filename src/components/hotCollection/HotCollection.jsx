import React from "react";
import "./_hotCollection.scss";

import Button from "@mui/material/Button";

const HotCollection = (props) => {
  const item = props.product;
  return (
    <div className="HotCollectionContainer">
      <div className="box-img">
        <img src={item.banner} alt="banner" />
      </div>
      <div>
        <h1
          style={{
            fontWeight: "400",
          }}
        >
          {item.title}
        </h1>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "35px",
          }}
        >
          {item.desc}
        </p>
        <Button
          variant="outlined"
          style={{
            color: "#343a40",
            borderColor: "#343a40",
            fontWeight: "400",
          }}
        >
          MUA NGAY BÂY GIỜ
        </Button>
      </div>
    </div>
  );
};

export default HotCollection;
