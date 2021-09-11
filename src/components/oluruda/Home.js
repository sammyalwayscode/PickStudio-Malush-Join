import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import styled from "styled-components";


function Home() {

  return (


    <Container>
      <HeroSection />
      <ModalButton />
    </Container>

  );
}

export default Home;


const Container = styled.div`
background-color: #191a1c;
`