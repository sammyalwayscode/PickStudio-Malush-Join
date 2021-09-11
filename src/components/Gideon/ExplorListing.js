import React from "react";
import styled from "styled-components";
import pic from "./img/1.jpeg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ExplorListing = () => {
  return (
    <Container>
      <ExploreCard>
        <ExploreImg src={pic} />
        <ExploreTitle>Insigna Media Lekki Studio</ExploreTitle>
        <ExploreType>
          <span style={{ color: "gray", fontSize: "14px" }}>Type</span> : Studio
          Space
        </ExploreType>
        <ExploreLocation>
          {" "}
          <span style={{ color: "gray", fontSize: "14px" }}>Location</span> :
          Lekki
        </ExploreLocation>
        <ExplorePrice>
          {" "}
          <span style={{ color: "gray", fontSize: "14px" }}>Price</span> : ₦
          20,000.00 (Charged Hourly)
        </ExplorePrice>
        <ExploreDescription>
          {" "}
          <span style={{ color: "gray", fontSize: "14px" }}>Description</span> :
          Large studio space for Photography Video and Small Events.
        </ExploreDescription>
        <ExploreDetails>
          <ShoppingCartIcon style={{ color: "white" }} />
          <DetailText>Details and Booking</DetailText>
        </ExploreDetails>
      </ExploreCard>
    </Container>
  );
};

export default ExplorListing;

const DetailText = styled.div`
  color: white;
`;
const ExploreDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid gray;
  width: 200px;
  margin: 5px;
  margin-left: 60px;
  border-radius: 10px;
  margin-bottom: 20px;

  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const ExploreDescription = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
  /* background-color: red; */
  width: 300px;
  font-size: 13.5px;
  overflow: hidden;
`;
const ExplorePrice = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
`;

const ExploreLocation = styled.div`
  color: white;
  margin: 5px;
  margin-left: 10px;
  font-size: 15px;
`;

const ExploreType = styled.div`
  /* margin: 10px; */
  color: white;
  margin: 5px;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191a1c;
  height: 100vh;
`;
const ExploreCard = styled.div`
  /* height: 430px; */
  width: 320px;
  background-color: #191919;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 7px 3px rgba(0, 0, 0, 0.35);

  /* justify-content: center; */
  flex-direction: column;
  margin: 10px;
`;
const ExploreTitle = styled.div`
  margin: 10px;
  font-size: 17px;
  color: white;
  font-weight: bold;
`;
const ExploreImg = styled.img`
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
