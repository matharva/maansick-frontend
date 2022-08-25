import React, { useEffect } from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate("/upload");
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow ">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
