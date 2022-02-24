import React from "react";
import PizzaCard from "./PizzaCard";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const FoodList = ({ pizzaList }) => {
  // console.log("PizzaList:" + pizzaList.data);
  const isSmall = useMediaQuery("(min-width:750)");
  const isMedium = useMediaQuery("(min-width:900px)");
  return (
    <>
      {/* <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {pizzaList.data.map((item) => (
            <PizzaCard item={item} key={item._id} />
          ))}
        </ImageList>
      </Box> */}
      <div className="mr-5 ml-5">
        <Box>
          <ImageList
            variant="masonry"
            cols={isSmall ? 2 : isMedium ? 3 : 1}
            gap={18}
          >
            {pizzaList.data.map((item) => (
              <PizzaCard item={item} key={item._id} />
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
};

export default FoodList;
