import React from "react";
import styles from "./CategoryCarousel.module.css";
import Link from "next/link";

const CategoryCarouselItem = ({ item }) => {
  return (
    <Link
      href={`/p/${item.id}`}
      style={{
        textAlign: "center",
        display: "block",
        cursor: "pointer",
        marginLeft: "5px",
        marginRight: "5px",
        fontSize: "14px",
      }}
    >
      {item?.img ? (
        <img
          src={item?.img}
          alt={item?.name?.[0]}
          style={{
            height: 65,
            width: 65,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            margin: "auto",
            borderRadius: "50%",
            border: "1px solid #dbebe1",
            padding: "8px",
            marginBottom: "5px",
            cursor: "pointer",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: "30px",
            height: 65,
            width: 65,
            background: "#e3e3e3",
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            margin: "auto",
            borderRadius: "50%",
            border: "1px solid #dbebe1",
            padding: "8px",
            marginBottom: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item?.name?.[0]}
        </span>
      )}
      <span>{item?.name}</span>
    </Link>
  );
};

export default CategoryCarouselItem;
