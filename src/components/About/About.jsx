import PropTypes from "prop-types";
import "./About.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import { useEffect } from "react";

const About = ({ data }) => {
  // DYNAMIC DATA IS STARTED TO FETCH HERE
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => res.json())
      .then((datas) => setDatas(datas));
  }, []);

  const user = datas?.user;
  const about = user?.about;
  // console.log("about: ", about);

  const { imgLink, subtitle, text, details, cvPdf } = data;

  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              <div
                className="st-about-img st-bg"
                style={{ backgroundImage: `url(${about?.avatar?.url})` }}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div
                  className={`st-text-block st-style1`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 className="st-text-block-title">
                    Hi There! I'm {about?.name}
                  </h2>
                  <h4 className="st-text-block-subtitle">{about?.title}</h4>
                  <h6 className="st-text-block-subtitle">{about?.subTitle}</h6>
                  <div className="st-text-block-text">
                    <p>{about?.description}</p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    {/* {details.map((item, index) => ( */}
                    <li>
                      <span>Phone</span> :<span>{about?.phoneNumber}</span>
                    </li>
                    <li>
                      <span>Experience</span> :
                      <span>{about?.exp_year} years</span>
                    </li>
                    <li>
                      <span>Address</span> : <span>{about?.address} </span>
                    </li>
                    <li>
                      <span>Quote</span> : <span>{about?.quote}</span>
                    </li>
                    {/* ))} */}
                  </ul>
                  <div className="st-text-block-btn">
                    <a
                      className="st-btn st-style1 st-color1"
                      href={cvPdf}
                      download
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
