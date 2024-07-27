import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";
import HowToBooks from "./HowToBook";
import WhyOhMyPlaces from "./WhyOhMyPlace";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <HowToBooks />
      <Teams />
      {/* <Book /> */}
      
      <Rooms />
      <Services />
      <WhyOhMyPlaces />
      {/* <Sliders /> */}
      
    </>
  );
}
