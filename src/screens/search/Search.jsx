import React from "react";
import { useParams } from "react-router-dom";
import CarouselHover from "../../components/carouselHover/CarouselHover.jsx";
import { data } from "../../data/data.js";

import "./search.scss";

const Search = () => {
  const { keyword } = useParams();
  const products = data.filter((item) => {
    if (keyword === "empty") {
      return [];
    } else if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
      return item;
    }
  });

  return (
    <div className="searchContainer">
      <div>
        {keyword === "empty" ? (
          <h2>Vui lòng nhập từ khoá</h2>
        ) : (
          <div className="products">
            {products.map((item) => {
              return <CarouselHover sp={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
