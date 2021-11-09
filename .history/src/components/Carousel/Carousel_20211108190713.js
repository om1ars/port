import React from 'react'
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";



const technologies = [
    {
        id: 1,
        title: 'CSS&SCSS',
        image: null
    },
    {
        id: 2,
        title: 'Vanilla JS',
        image: null
    },
    {
        id: 3,
        title: 'React',
        image: null
    },
    {
        id: 4,
        title: 'Redux',
        image: null
    },
    {
        id: 5,
        title: 'Redux/toolkit',
        image: null
    },
    {
        id: 6,
        title: '6 UI-libraries',
        image: null
    },
    {
        id: 7,
        title: 'Typescript',
        image: null
    },
    {
        id: 8,
        title: 'Firebase/firestore',
        image: null
    },
    {
        id: 9,
        title: 'Middlewares',
        image: null
    },
 
]


const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
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

export default function Carousel() {
    return (
        <div>
            
        </div>
    )
}
