import React from "react";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const technologies = [
  {
    id: 1,
    title: "CSS&SCSS",
    image: null,
  },
  {
    id: 2,
    title: "Vanilla JS",
    image: null,
  },
  {
    id: 3,
    title: "React",
    image: null,
  },
  {
    id: 4,
    title: "Redux",
    image: null,
  },
  {
    id: 5,
    title: "Redux/toolkit",
    image: null,
  },
  {
    id: 6,
    title: "6 UI-libraries",
    image: null,
  },
  {
    id: 7,
    title: "Typescript",
    image: null,
  },
  {
    id: 8,
    title: "Firebase/firestore",
    image: null,
  },
  {
    id: 9,
    title: "Middlewares",
    image: null,
  },
];

export default function Carousel() {
  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      zIndex: 999,
      backgroundColor: 'white'
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));
  const classes = useStyles();

  const items = technologies.map((coin) => {
    return (
      <Link className={classes.carouselItem} to={`/}`}>
        <img
          src={coin?.image}
          alt={coin.title}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          <span
            style={{
              color: "rgb(14, 203, 129)",
              fontWeight: 500,
            }}
          >
            {coin.title}
          </span>
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div>
      <div className={classes.carousel}>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>
    </div>
  );
}
