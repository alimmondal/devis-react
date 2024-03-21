import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Iconbox.scss";
import { useState } from "react";
import { useEffect } from "react";

const IconBox = ({ data }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  // const service = datas?.user?.services;

  // console.log("Service", service);

  const { services } = data;

  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {datas?.user?.services.map((element, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={element.effect ? element.effect : "zoom-out-up"}
              data-aos-duration={element.duration ? element.duration : "800"}
              data-aos-delay={element.delay ? element.delay : "200"}
            >
              <div className={`st-iconbox st-style1`}>
                <div className="st-iconbox-icon">
                  <img src={element.image?.url} alt="Icon" />
                </div>
                <h2 className="st-iconbox-title">{element?.name}</h2>
                <div className="st-iconbox-text">{element.desc}</div>
                {/* <div className="st-iconbox-text">Charge: {element?.charge}</div> */}
              </div>
              <div className="st-height-b30 st-height-lg-b30"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

IconBox.propTypes = {
  data: PropTypes.object,
};

export default IconBox;
