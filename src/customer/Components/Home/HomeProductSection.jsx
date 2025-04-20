import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

const HomeProductSection = ({ section, data }) => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const totalItems = data?.slice(0, 10).length || 0;

  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = data?.slice(0, 10).map((item, index) => (
    <div key={index}>
      <HomeProductCard product={item} />
    </div>
  ));

  const handleSlideChange = (e) => {
    setActiveIndex(e?.item);
  };

  const visibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 5.5;
    if (width >= 568) return 3;
    return 2;
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
          ref={carouselRef}
          onSlideChanged={handleSlideChange}
        />

        {/* Show Right button only if not at the end */}
        {activeIndex + visibleItems() < totalItems && (
          <Button
            onClick={() => carouselRef.current?.slideNext()}
            variant="contained"
            className="z-50 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}

        {/* Show Left button only if not at the start */}
        {activeIndex > 0 && (
          <Button
            onClick={() => carouselRef.current?.slidePrev()}
            variant="contained"
            className="z-50 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="prev"
          >
            <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
