"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import CategoryCarouselItem from "./CategoryCarouselItem";
// import { CategoryCarouselData } from "../../utills/globalData";
import Slider from "react-slick";
import styles from "./CategoryCarousel.module.css";
import Link from "next/link";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.CategoryCarouselArrows}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.CategoryCarouselArrows}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const CategoryCarousel = ({ categories }) => {
  const settings = {
    initialSlide: 0,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      sx={{
        padding: "8px",
        marginY: "14px",
      }}
    >
      {/* <Slider {...settings}>
        {categories.length > 0 &&
          categories.map((cat) => {
            <div key={"catid" + cat.id}>
              <Link
                href={"/p/" + cat.id}
                className="btn btn-sm m-3 p-3 rounded-sm"
              >
                {cat.name}
              </Link>
            </div>;
          })}
      </Slider>
    */}
      <Slider {...settings}>
        {categories?.map((item, i) => (
          <CategoryCarouselItem key={i} item={item} />
        ))}
      </Slider>
    </Container>
  );
};

export default CategoryCarousel;
