"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import megan from "./assets/team.png";
import team2 from "./assets/team2.png";
import team3 from "./assets/team3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import anand from "./assets/team/AnandMishra.png";
import anurag from "./assets/team/Anurag.png";
import travadi from "./assets/team/MohammadTravadi.png";
import rajiv from "./assets/team/Rajiv.png";
import rakes from "./assets/team/Rakes.png";
import satendar from "./assets/team/Satendar.png";
import uday from "./assets/team/UdayKambe.png";
import vishno from "./assets/team/Vishno.png";

const teamData = [
  {
    id: 0,
    name: "Rajiv Sharma",
    designation: "AVP Production Fabrics",
    img: rajiv,
  },
  {
    id: 1,
    name: "Vishnoo Pachori",
    designation: "VP Marketing Fabrics",
    img: vishno,
  },
  {
    id: 2,
    name: "Rakesh Jayaraman",
    designation: "VP Marketing Garments",
    img: rakes,
  },
  {
    id: 3,
    name: "Anand Mishra",
    designation: "GM Production Garments",
    img: anand,
  },
  {
    id: 4,
    name: "Satendra Singh",
    designation: "Head Accounts & Commercial",
    img: satendar,
  },
  {
    id: 5,
    name: "Anurag Duglach",
    designation: "Head Ecommerce & Social Media",
    img: anurag,
  },
  {
    id: 6,
    name: "Uday Kambe",
    designation: "Head IT",
    img: uday,
  },
  {
    id: 7,
    name: "Mohammad Travedi",
    designation: "GM B2B",
    img: travadi,
  },
];

export default function () {
  var settings = {
    // arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%",
  };
  var settingLarge = {
    arrows: true,
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "8%",
  };

  return (
    <Stack margin={{ md: "100px 0 0 0", xs: "30px 0 0 0" }}>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Meet some of Our 2000+
      </Typography>
      <Typography
        fontSize={{ md: "3rem", smm: "2rem", xs: "1.2rem" }}
        sx={{
          color: "#D88684",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Professionals
      </Typography>
      <Stack
        width={"90%"}
        margin={"0px auto"}
        marginTop={"40px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Slider {...settingLarge}>
          {teamData.map((el, i) => (
            <Card el={el} />
          ))}
        </Slider>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        <Slider {...settings}>
          {teamData.map((el, i) => (
            <CardSmall el={el} />
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
}

function CardSmall({ el }) {
  return (
    <Stack
      height={{ smm: "60vh", xs: "30vh" }}
      width={"90%"}
      alignItems={"center"}
    >
      <Box
        height={{ smm: "60vh", xs: "30vh" }}
        width={"100%"}
        sx={{
          backgroundImage: `url(${el.img.src})`,
          backgroundSize: "contain",
          backgroundColor: "#E7E7E7",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          backgroundPosition: "center center",
        }}
      ></Box>
      <Typography
        textAlign={"center"}
        fontSize={{ smm: "1.2rem", xs: "1rem" }}
        fontWeight={"bold"}
      >
        {el.name}
      </Typography>
      <Typography textAlign={"center"} fontSize={{ smm: "1rem", xs: "0.8rem" }}>
        {el.designation}
      </Typography>
    </Stack>
  );
}

function Card({ el }) {
  return (
    <Stack
      height={"fit-content"}
      width={"20vw"}
      marginBottom={"50px"}
      alignItems={"center"}
    >
      <Box
        position={"relative"}
        height={{ lg: "40vh", xs: "30vh" }}
        width={"100%"}
        backgroundColor={"#E7E7E7"}
        borderRadius={"5px"}
      >
        <Image
          src={el.img}
          alt=""
          fill
          objectPosition="bottom"
          objectFit="contain"
          sizes="100vw"
        />
      </Box>
      <Typography
        textAlign={"center"}
        fontSize={{ lg: "1.2rem", xs: "1rem" }}
        fontWeight={"bold"}
      >
        {el.name}
      </Typography>
      <Typography
        textAlign={"center"}
        fontSize={{ lg: "0.9rem", xs: "0.8rem" }}
      >
        {el.designation}
      </Typography>
    </Stack>
  );
}
