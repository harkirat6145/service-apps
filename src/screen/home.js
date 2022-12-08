import React from "react";
import { Header } from "../components/header";
import { NavBar } from "../components/navBar";
import Slider from "../components/slider";
import { About } from "../components/about";
import TopCard from "../components/topCard";
import { Journal } from "../components/journal";
import { NewsEvent } from "../components/newsevent";
import { Container } from "../style/style";
import ProfileSlider from "../components/profileSlider";
import { NewLetter } from "../components/newLetter";
import { Footer } from "../components/footer";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <NavBar />
        <Slider />
        <About />
        <TopCard />
        <Journal />
        <NewsEvent />
        <ProfileSlider />
        <NewLetter />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
