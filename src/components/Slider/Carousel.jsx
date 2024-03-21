import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";
import { useState } from "react";
import { useEffect } from "react";

const Carousel = ({ data }) => {
  // DYNAMIC DATA IS STARTED FETCHING HERE
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  const { useFor, informations, sliderSetting, sliderImages } = data;

  if (useFor === "blog") {
    return (
      <Slider {...sliderSetting}>
        {informations.map((element, index) => (
          <SingleBlog element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "review") {
    return (
      <Slider {...sliderSetting}>
        {datas?.user?.testimonials?.map((element, index) => (
          <SingleReview element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "image-slider") {
    return (
      <Slider {...sliderSetting}>
        {sliderImages.map((item, index) => (
          <img src={item.imgLink} key={index} alt="" />
        ))}
      </Slider>
    );
  } else {
    <Slider {...sliderSetting}></Slider>;
  }
};

Carousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
};

export default Carousel;
