import { Stack } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Hero from "./parts/Hero";
import Collage from "./parts/Collage";
import Reviews from "./parts/Review";
import Map from "./parts/Map";

export default function Clients() {
  return (
    <Stack>
      <Navbar />
      <Hero />
      <Collage />
      <Reviews />
      <Map />
      <Footer />
    </Stack>
  );
}
