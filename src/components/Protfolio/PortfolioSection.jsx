import PropTypes from "prop-types";
import "./Portfolio.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";
import SinglePortfolio from "./SinglePortfolio";
import Modal from "../Modal/Modal";
import { useEffect } from "react";

const PortfolioSection = () => {
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
        const initialVisibleItems = datas?.user?.projects?.slice(0, 6); // Adjust the slice according to your requirement
        setVisibleItems(initialVisibleItems);
        if (initialVisibleItems.length >= datas?.user?.projects?.length) {
          setShowLoadMore(false);
        }
      });
  }, []);

  const loadMoreItems = () => {
    const currentLength = visibleItems?.length;
    const nextChunk = datas?.user?.projects?.slice(
      currentLength,
      currentLength + 6 // Adjust this according to  requirement
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + 6 >= datas?.user?.projects?.length) {
      setShowLoadMore(false);
    }
  };

  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (url, title) => {
    let tempData = [url, title];
    setTempData((item) => [1, ...tempData]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={"Portfolio"} />
        <div className="container">
          <div className="row">
            {visibleItems?.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          // subTitle={tempData[3]}
          modalClose={modalClose}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PortfolioSection;
