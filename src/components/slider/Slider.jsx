import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Sl1 from "../../assets/IMG_ExSL1.jpg";
import Sl2 from "../../assets/IMG_ExSL2.jpg";
import Sl3 from "../../assets/IMG_ExSL3.jpg";

const Slider = (props) => {
  return (
    <div style={{ margin: "30px 0" }}>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "black" }}>@HANGOUT.COFFEE @STAYATHOME</h4>
      </div>
      <Swiper spaceBetween={30} slidesPerView={3}>
        <SwiperSlide>
          <img src={Sl1} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl2} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl3} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl1} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl2} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl3} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl1} alt="slider" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sl2} alt="slider" width={"100%"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
