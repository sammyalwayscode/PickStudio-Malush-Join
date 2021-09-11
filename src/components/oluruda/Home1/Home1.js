import React from "react";
import styled from "styled-components";

const Home1 = () => {
  return (
    <div>
      <Container>
        <img
          src=""
          alt=""
          style={{
            height: "350px",
            width: "400px",
            objectFit: "cover",
          }}
        />
        <ImgText>
          <strong style={{ fontSize: "18px" }}>
            SAVE YOUR TIME AND ENERGY!
          </strong>
          <p>
            As a professional photographer or videographer, one of your most
            tasking assignments is finding a suitable studio or location for
            your shoots. This is why we are here to save you from all that
            stress. Redirect your energy into more demanding areas. Leave this
            part, it's on us no hidden fees, no extra charges!
          </p>

          <p>
            Just browse through our listed studios, make a choice, and make a
            booking. We can also render you personalized on-demand services such
            as special equipment rentals, coffee for you and your team, or
            anything else in any studio location of your choice.
          </p>

          <strong style={{ fontSize: "13px", color: "#fff" }}>
            WITH OVER 30 STUDIOS LISTED WORLD OVER, YOU CAN NEVER GO WRONG
          </strong>
          <br />
          <i style={{ color: "wheat" }}>
            "Please note that our services are currently limited to
            Lagos-Nigeria. Watch out, we'll be at your doorstep soon."
          </i>
        </ImgText>
      </Container>
    </div>
  );
};

export default Home1;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 70px;
`;

// const SubContainer = styled.div`
//   /* width: 1100px; */
//   display: flex;
//   background-color: blue;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
// `;

const ImgText = styled.div`
  width: 550px;
  font-size: 16px;
  color: #9ca0a4;
  margin: 10px;
`;
