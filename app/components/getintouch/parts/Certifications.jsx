"use client";

import { Box, Stack, Typography } from "@mui/material";
import cert from "./assets/Certification.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cert1 from "./assets/certs/skyTextiles/1.jpg";
import cert2 from "./assets/certs/skyTextiles/2.jpg";
import cert3 from "./assets/certs/skyTextiles/3.jpg";
import cert4 from "./assets/certs/skyTextiles/4.jpg";
import cert5 from "./assets/certs/skyTextiles/5.jpg";
import cert6 from "./assets/certs/skyTextiles/6.jpg";
import cert7 from "./assets/certs/skyTextiles/7.jpg";
import cert8 from "./assets/certs/skyTextiles/8.jpg";
import cert9 from "./assets/certs/skyTextiles/9.jpg";
import cert10 from "./assets/certs/skyTextiles/10.jpg";
import cert11 from "./assets/certs/skyTextiles/11.jpg";
import cert12 from "./assets/certs/skyTextiles/12.jpg";
import cert13 from "./assets/certs/skyTextiles/13.jpg";
import cert14 from "./assets/certs/skyTextiles/14.jpg";
import cert15 from "./assets/certs/skyTextiles/15.jpg";
import cert16 from "./assets/certs/skyTextiles/16.jpg";
import cert17 from "./assets/certs/skyTextiles/17.jpg";
import cert18 from "./assets/certs/skyTextiles/18.jpg";
import cert19 from "./assets/certs/skyTextiles/19.jpg";
import cert20 from "./assets/certs/skyTextiles/20.jpg";
import cert21 from "./assets/certs/skyTextiles/21.jpg";
import cert22 from "./assets/certs/skyTextiles/22.jpg";
import cert23 from "./assets/certs/skyTextiles/23.jpg";
import cert24 from "./assets/certs/skyTextiles/24.jpg";
import cert25 from "./assets/certs/skyTextiles/25.jpg";
import cert26 from "./assets/certs/skyTextiles/26.jpg";
import cert27 from "./assets/certs/skyTextiles/27.jpg";
import cert28 from "./assets/certs/skyTextiles/28.jpg";
import cert29 from "./assets/certs/skyTextiles/29.jpg";
import cert30 from "./assets/certs/skyTextiles/30.jpg";
import cert31 from "./assets/certs/skyTextiles/31.jpg";
import cert32 from "./assets/certs/skyTextiles/32.jpg";
import cert33 from "./assets/certs/skyTextiles/33.jpg";
import cert34 from "./assets/certs/skyTextiles/34.jpg";
import cert35 from "./assets/certs/skyTextiles/35.jpg";
import cert36 from "./assets/certs/skyTextiles/36.jpg";
import cert37 from "./assets/certs/skyTextiles/37.jpg";
import cert38 from "./assets/certs/skyTextiles/38.jpg";
import cert39 from "./assets/certs/skyTextiles/39.jpg";
import cert40 from "./assets/certs/skyTextiles/40.jpg";
import cert41 from "./assets/certs/skyTextiles/41.jpg";
import cert42 from "./assets/certs/skyTextiles/42.jpg";
import cert43 from "./assets/certs/skyTextiles/43.jpg";
import cert44 from "./assets/certs/skyTextiles/44.jpg";
import cert45 from "./assets/certs/skyTextiles/45.jpg";
import cert46 from "./assets/certs/skyTextiles/46.jpg";
import cert47 from "./assets/certs/skyTextiles/47.jpg";
import cert48 from "./assets/certs/skyTextiles/48.jpg";
import cert49 from "./assets/certs/skyTextiles/49.jpg";
import cert50 from "./assets/certs/skyTextiles/50.jpg";
import cert51 from "./assets/certs/skyTextiles/51.jpg";
import cert52 from "./assets/certs/skyTextiles/52.jpg";
import cert53 from "./assets/certs/skyTextiles/53.jpg";
import cert54 from "./assets/certs/skyTextiles/54.jpg";
import cert55 from "./assets/certs/skyTextiles/55.jpg";
import cert56 from "./assets/certs/skyTextiles/56.jpg";
import cert57 from "./assets/certs/skyTextiles/57.jpg";
import cert58 from "./assets/certs/skyTextiles/58.jpg";
import cert59 from "./assets/certs/skyTextiles/59.jpg";
import cert60 from "./assets/certs/skyTextiles/60.jpg";

import certi1 from "./assets/certs/skyPrimware/1.jpg";
import certi2 from "./assets/certs/skyPrimware/2.jpg";
import certi3 from "./assets/certs/skyPrimware/3.jpg";
import certi4 from "./assets/certs/skyPrimware/4.jpg";
import certi5 from "./assets/certs/skyPrimware/5.jpg";
import certi6 from "./assets/certs/skyPrimware/6.jpg";
import certi7 from "./assets/certs/skyPrimware/7.jpg";
import certi8 from "./assets/certs/skyPrimware/8.jpg";
import certi9 from "./assets/certs/skyPrimware/9.jpg";
import certi10 from "./assets/certs/skyPrimware/10.jpg";
import certi11 from "./assets/certs/skyPrimware/11.jpg";
import certi12 from "./assets/certs/skyPrimware/12.jpg";
import certi13 from "./assets/certs/skyPrimware/13.jpg";
import certi14 from "./assets/certs/skyPrimware/14.jpg";
import certi15 from "./assets/certs/skyPrimware/15.jpg";
import certi16 from "./assets/certs/skyPrimware/16.jpg";
import certi17 from "./assets/certs/skyPrimware/17.jpg";
import certi18 from "./assets/certs/skyPrimware/18.jpg";
import certi19 from "./assets/certs/skyPrimware/19.jpg";
import certi20 from "./assets/certs/skyPrimware/20.jpg";
import certi21 from "./assets/certs/skyPrimware/21.jpg";
import certi22 from "./assets/certs/skyPrimware/22.jpg";
import certi23 from "./assets/certs/skyPrimware/23.jpg";
import certi24 from "./assets/certs/skyPrimware/24.jpg";

const skyPrimwareImages = [
  certi1,
  certi2,
  certi3,
  certi4,
  certi5,
  certi6,
  certi7,
  certi8,
  certi9,
  certi10,
  certi11,
  certi12,
  certi13,
  certi14,
  certi15,
  certi16,
  certi17,
  certi18,
  certi19,
  certi20,
  certi21,
  certi22,
  certi23,
  certi24,
];

const skyTextileImages = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert15,
  cert16,
  cert17,
  cert18,
  cert19,
  cert20,
  cert21,
  cert22,
  cert23,
  cert24,
  cert25,
  cert26,
  cert27,
  cert28,
  cert29,
  cert30,
  cert31,
  cert32,
  cert33,
  cert34,
  cert35,
  cert36,
  cert37,
  cert38,
  cert39,
  cert40,
  cert41,
  cert42,
  cert43,
  cert44,
  cert45,
  cert46,
  cert47,
  cert48,
  cert49,
  cert50,
  cert51,
  cert52,
  cert53,
  cert54,
  cert55,
  cert56,
  cert57,
  cert58,
  cert59,
  cert60,
];

export default function Certifications() {
  var settingsSkyTextiles = {
    // arrows: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 500,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingSkyTextilesLarge = {
    arrows: true,
    dots: false,
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
    <Stack>
      <Navbar />
      <Stack margin={"100px 0"}>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Global Recognition And
        </Typography>
        <Typography
          fontSize={{ md: "3rem", sm: "1.9rem" }}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Certifications
        </Typography>

        <Typography
          width={{ md: "80%", xs: "90%" }}
          margin={"0 auto"}
          marginTop={"30px"}
          fontSize={{ md: "1rem", xs: "0.8rem" }}
          textAlign={"center"}
        >
          Certifications in fabric and garment manufacturing show our commitment
          to quality, safety, and sustainability, ensuring products meet
          international standards for durability and ethics. With certifications
          like ISO, Oeko-Tex, and GOTS, we prioritize eco-friendly materials,
          safe conditions, and non-toxic processes. Our factory strictly follows
          these standards, conducting audits and staff training to maintain
          compliance, building trust with partners and customers while
          delivering responsibly produced, high-quality fabrics and garments.
        </Typography>
      </Stack>
      <Typography
        fontSize={{ md: "2.5rem", sm: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Sky Textiles
      </Typography>
      <Typography
        margin={{ md: "20px 100px", xs: "20px" }}
        fontSize={{ md: "1rem", xs: "0.8rem" }}
        textAlign={"center"}
      >
        Sky Textiles' fabric manufacturing plant is certified for high-quality
        standards and sustainable practices. We hold certifications like ISO
        9001 for quality management, Oeko-Tex Standard 100 for safe and
        eco-friendly textiles, and GOTS for organic fabrics. These credentials
        ensure our commitment to excellence, safety, and environmental
        responsibility.
      </Typography>
      <Stack
        width={"90%"}
        margin={"50px auto"}
        marginTop={"30px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Slider {...settingSkyTextilesLarge}>
          {skyTextileImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        <Slider {...settingsSkyTextiles}>
          {skyTextileImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider>
      </Stack>
      <Typography
        fontSize={{ md: "2.5rem", sm: "1.5rem" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Sky Primware
      </Typography>
      <Typography
        margin={{ md: "20px 100px", xs: "20px" }}
        fontSize={{ md: "1rem", xs: "0.8rem" }}
        textAlign={"center"}
      >
        SKYPRIMWEAR, our garment manufacturing plant, is certified for
        exceptional quality and ethical production. We hold certifications like
        ISO 9001 for quality management, WRAP for responsible and safe working
        conditions, and Oeko-Tex Standard 100 for eco-friendly and non-toxic
        garments. These ensure premium, sustainable, and ethical garment
        manufacturing practices
      </Typography>
      <Stack
        width={"90%"}
        margin={"50px auto"}
        marginTop={"30px"}
        display={{ md: "flex", xs: "none" }}
      >
        <Slider {...settingSkyTextilesLarge}>
          {skyPrimwareImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider>
      </Stack>
      <Stack
        height={{ smm: "60vh" }}
        display={{ md: "none", xs: "flex" }}
        margin={"30px 20px"}
      >
        <Slider {...settingsSkyTextiles}>
          {skyPrimwareImages.map((el, i) => (
            <Box
              width={"20vw"}
              height={{ md: "50vh", xs: "30vh" }}
              sx={{
                backgroundImage: `url(${el.src})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 10px",
                padding: "0 10px",
              }}
            ></Box>
          ))}
        </Slider>
      </Stack>

      <Footer />
    </Stack>
  );
}
