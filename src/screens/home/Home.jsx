import React, { useState } from "react";
import "./home.scss";
import {
  collection_data,
  home_data,
  thun_data,
  somi_data,
  khoac_data,
  quandai_data,
  quanngan_data,
} from "../../data/data.js";
import BannerShoes from "../../assets/IMG_BannerShoes.jpg";

import ACollection from "../../components/aCollection/ACollection";
import Slider from "../../components/slider/Slider";
import ListProduct from "../../components/listProduct/ListProduct";
import HotCollection from "../../components/hotCollection/HotCollection";

const Home = () => {
  const [collection, setCollection] = useState(collection_data);
  const [sample, setSample] = useState(home_data);
  const t_shirt = thun_data;
  const shirt = somi_data;
  const jacket = khoac_data;
  const pants = quandai_data;
  const short = quanngan_data;
  return (
    <div className="homeContainer">
      {sample.map((item, index) => {
        return <ACollection product={item} id={item.id} />;
      })}
      <div className="bannerShoes">
        <img src={BannerShoes} alt="banner" width={1400} />
      </div>
      <Slider />
      <ListProduct sp={t_shirt} title="BEST T-SHIRT" link="/products/thun" />
      <ListProduct sp={shirt} title="BEST SHIRT" link="/products/somi" />
      <ListProduct sp={jacket} title="BEST JACKET" link="/products/khoac" />
      <Slider />
      <ListProduct
        sp={pants}
        title="BEST PANTS-JEANS"
        link="/products/quandai"
      />
      <ListProduct sp={short} title="BEST SHORT" link="/products/quanngan" />

      {collection.map((item) => {
        return <HotCollection product={item} id={item.id} />;
      })}
    </div>
  );
};

export default Home;
