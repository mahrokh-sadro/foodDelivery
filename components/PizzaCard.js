import React from "react";
import Link from "next/link";
import ImageListItem from "@mui/material/ImageListItem";

const FoodCard = ({ item }) => {
  return (
    <>
      <Link href={`/products/${item._id}`} passHref>
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      </Link>
    </>
  );
};

export default FoodCard;
