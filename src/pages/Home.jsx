import React from "react";
import Hero from "../component/Hero";
import About from "./About";
import Hero1 from "../component/Hero1";
// import Product from "./Product";
import MpReview from "../component/MpReview";
import OurTreatmentt from "../component/OurTreatmentt";
import ChoosseUss from "../component/ChoosseUss";
import HomeProduct from "./HomeProduct";


const Home = () => {
  return (
    <div>
      <Hero1/>
      <Hero />
      <About />
      <HomeProduct/>
      <ChoosseUss/>
      <OurTreatmentt/>
      <MpReview/>

    </div>
  );
};

export default Home;
