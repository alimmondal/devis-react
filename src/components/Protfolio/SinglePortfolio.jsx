import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SinglePortfolio = ({ data, getData }) => {
  const { image, title, techStack } = data;
  const url = image?.url;

  return (
    <div
      className="col-lg-4 col-md-6"
      // data-aos={effect}
      // data-aos-duration={duration}
      // data-aos-delay={delay}
    >
      <div
        className="st-portfolio-single st-style1"
        onClick={() => getData(url, title)}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              {/* <p>{subTitle}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
};

export default SinglePortfolio;
