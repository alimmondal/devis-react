import PropTypes from "prop-types";
import "./Skill.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import { useEffect } from "react";

const Skill = ({ data }) => {
  const [datas, setDatas] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        const initialVisibleItems = datas?.user?.skills?.slice(0, 5); // Adjust the slice according to your requirement
        setVisibleItems(initialVisibleItems);
        if (initialVisibleItems.length >= datas?.user?.skills?.length) {
          setShowLoadMore(false);
        }
      });
  }, []);

  const loadMoreItems = () => {
    const currentLength = visibleItems?.length;
    const nextChunk = datas?.user?.skills?.slice(
      currentLength,
      currentLength + 5 // Adjust this according to your requirement
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + 5 >= datas?.user?.skills?.length) {
      setShowLoadMore(false);
    }
  };

  const { title, text } = data;
  return (
    <section className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Skills" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                <div className="st-skill-subtitle">{text}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b30"></div>
            <div className="st-progressbar-wrap">
              {visibleItems?.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  data-aos={element.effect}
                  data-aos-duration={element.duration}
                  data-aos-delay={element.delay}
                >
                  <div className="st-progressbar-heading">
                    <h3 className="st-progressbar-title">{element.name}</h3>
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.percentage}
                    </div>
                  </div>
                  <div className="st-progressbar" data-progress="95">
                    <div className="st-progressbar-in "></div>
                  </div>
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
              {/* Load Mor Button */}
              <div className="col-lg-12 text-center">
                <div className="st-portfolio-btn">
                  {showLoadMore && (
                    <button
                      className="st-btn st-style1 st-color1"
                      onClick={loadMoreItems}
                    >
                      Load more skills
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skill.propTypes = {
  data: PropTypes.object,
};

export default Skill;
