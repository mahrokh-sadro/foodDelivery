import React from "react";
import Link from "next/link";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

const FoodCard = ({ item }) => {
  return (
    <>
      {/* <Link href={`/products/${item._id}`} passHref>
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      </Link> */}
      <Link href={`/products/${item._id}`} passHref>
        <ImageListItem>
          <img
            alt="pic"
            loading="lazy"
            src={`${item.img}?w=161&fit=crop&auto=format`}
          />

          <ImageListItemBar
            sx={{ mr: 2, mt: 2 }}
            title={item.title}
            Camera
            subtitle={<span>{item.title}</span>}
            position="below"
            align="right"
          />
        </ImageListItem>
      </Link>
    </>
  );
};

export default FoodCard;
