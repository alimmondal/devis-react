import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SocialLinks = ({ socialLinks }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {socialLinks?.map((item, index) => (
        <div key={index} className="">
          <Link
            to={item.url}
            className={
              index === activeLink ? "st-social-btn active" : "st-social-btn"
            }
            onMouseEnter={() => handleIconHover(index)}
            key={index}
          >
            <span className="st-social-icon" style={{ margin: "5px" }}>
              <img src={`${item?.image?.url}`} alt="Hero" />
            </span>
            <span className="st-icon-name">{item.platform}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

SocialLinks.propTypes = {
  data: PropTypes.array,
};

export default SocialLinks;
