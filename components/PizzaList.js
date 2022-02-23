import React from "react";
import PizzaCard from "./PizzaCard";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

const FoodList = ({ pizzaList }) => {
  // console.log("PizzaList:" + pizzaList.data);
  return (
    <>
      <ImageList
        // sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={15}
      >
        {pizzaList.data.map((item) => (
          <PizzaCard item={item} key={item._id} />
        ))}
      </ImageList>
    </>
  );
};

export default FoodList;
