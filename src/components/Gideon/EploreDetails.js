import React from "react";
import styled from "styled-components";
import pic from "./img/1.jpeg";
import pic1 from "./img/2.jpeg";
import pic2 from "./img/3.jpeg";

import "./ExplorStyle.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";

const EploreDetails = () => {
  const startValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    14
  );
  const endValue: Date = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    15
  );

  return (
    <Container>
      <StudioName>INSIGNA MEDIA LEKKI STUDIO</StudioName>
      <StudioOwner> By: Kola Ayo Oshalusi</StudioOwner>
      <PageHolder>
        <ImageBoxHolder>
          <MainImage src={pic} />
          <SubImageHolder>
            <SubImage1 src={pic2} />
            <SubImage1 src={pic1} />
            <SubImage1 src={pic} />
          </SubImageHolder>
        </ImageBoxHolder>
        <ContentDesc>
          <DisplayResource>
            <ResourceTypeHolder>
              <ResourceTitle>Resource Type:</ResourceTitle>
              <ResourceContent>Studio Space</ResourceContent>
            </ResourceTypeHolder>
            <ResourceTypeHolder>
              <ResourceTitle>Location:</ResourceTitle>
              <ResourceContent>Lekki</ResourceContent>
            </ResourceTypeHolder>
          </DisplayResource>
          <ResourcePrice>
            <ResourceTitle>Price:</ResourceTitle>
            <ResourceContent>
              ₦20,000.00{" "}
              <span style={{ color: "white" }}>(Charged Hourly)</span>
            </ResourceContent>
          </ResourcePrice>
          <ResourceDetail>
            <ResourceTitle>Detailed Information::</ResourceTitle>
            <ResourceDescription>
              ₦20,000.00 Large studio space for Photography Video and Small
              vents Open space is 45 feet x 15 feet, Sitting area is 12 feet by
              12 feet, theres a makeup, fitting and changing area. With
              convertible kitchen space. Studio offers photography lighting
              strobes, soft-boxes, backdrops, Computer system and LED continuous
              lights
            </ResourceDescription>
          </ResourceDetail>
          <StudioResouce>BOOK THIS RESOURCE</StudioResouce>
          <BookTitle>Pick A Date Range</BookTitle>
          <BookingBox>
            <BookingFormat>
              Format: (Day / Month / Year - Day / Month / Year)
            </BookingFormat>

            <DateRangePickerComponent
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",

                paddingLeft: "20px",
              }}
              placeholder="Enter Date Range"
              startDate={startValue}
              endDate={endValue}
              // minDays={10}
              // maxDays={10}
              format="dd-MMM-yy"
            ></DateRangePickerComponent>

            <button
              style={{
                marginTop: "5px",
                height: "30px",
                width: "250px",
                background: "black",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Check Availabily
            </button>
          </BookingBox>
          <button
            style={{
              marginTop: "10px",
              height: "40px",
              width: "300px",
              background: "brown",
              color: "white",
              border: "none",
            }}
          >
            ADD TO CART
          </button>
        </ContentDesc>
      </PageHolder>
    </Container>
  );
};

export default EploreDetails;

const BookingFormat = styled.div`
  font-size: 12px;
  margin-top: 5px;
`;

const BookingBox = styled.div`
  height: 100px;
  width: 300px;
  background: white;
  border-radius: 5px;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

const BookTitle = styled.div`
  color: gray;
  font-size: 16px;
  margin-top: 5px;
`;

const StudioResouce = styled.div`
  font-size: 25px;
  color: white;
  font-weight: bold;
  margin-top: 20px;

  @media screen and (max-width: 760px) {
    font-size: 17px;
    margin-top: 35px;
  }
`;
const ResourcePrice = styled.div`
  margin-top: 20px;
`;
const ResourceDetail = styled.div`
  margin-top: 20px;
`;

const DisplayResource = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;

  @media screen and (max-width: 760px) {
    width: auto;
  }
`;
const ResourceTypeHolder = styled.div``;
const ResourceTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
`;
const ResourceDescription = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
const ResourceContent = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: gray;
`;

const StudioName = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;

  @media screen and (max-width: 760px) {
    font-size: 17px;
    margin-top: 35px;
  }
`;
const StudioOwner = styled.div`
  margin: 10px;
  color: gray;
  font-weight: bold;
  font-size: 20px;

  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;

const PageHolder = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
`;
const SubImageHolder = styled.div`
  display: flex;
  margin-top: 10px;

  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    overflow-y: scroll;
  }
`;
const SubImage1 = styled.img`
  height: 130px;
  width: 150px;
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    margin: 2px;
  }
`;
const MainImage = styled.img`
  height: 350px;
  width: 500px;
  object-fit: cover;
  border-radius: 5px;
  @media screen and (max-width: 760px) {
    width: 320px;
  }
`;
const ImageBoxHolder = styled.div`
  height: 500px;
  width: 500px;
  margin-top: 20px;
  /* background-color: red; */

  @media screen and (max-width: 760px) {
    width: 320px;
  }
`;
const ContentDesc = styled.div`
  /* height: 500px; */
  width: 500px;
  margin: 20px; /* background-color: white; */
  @media screen and (max-width: 760px) {
    width: 320px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191a1c;
  height: 100vh;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;
