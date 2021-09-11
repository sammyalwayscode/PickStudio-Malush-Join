import React from 'react'
import styled from 'styled-components'
import img from "./img/2.jpg"
import { DeleteOutlined } from '@ant-design/icons';
import { SideBarData } from "./DataFile"


function MainData() {
  return (
    <AllContainer>
      <Container>
        {
          SideBarData.map(({ studioName, studionImg, sf, amt, from, to, qty, total, studioType }) => (
            <div>
              <Wrapper>
                <Con1>
                  <Type1>
                    <img src={studionImg} />

                  </Type1>
                  <Type2>
                    <span>{studioName}</span>
                    <p>Type:&nbsp;Studio Equipment</p>
                  </Type2>

                </Con1>
                <Con2>
                  {from}

                </Con2>
                <Con3>
                  {to}

                </Con3>
                <Con4>
                  1
                </Con4>
                <Con5>
                  ₦215,000.00
                </Con5>
                <Con6>
                  ₦0.00
                </Con6>
                <Con7>
                  ₦215,000.00
                </Con7>
                <Con8>
                  <DeleteOutlined style={{
                    color: "red"
                  }} />
                </Con8>

              </Wrapper>

            </div>
          ))
        }

      </Container>
    </AllContainer>
  )
}

export default MainData

const Type2 = styled.div`
height: 80px;
width: 140px ;

display: flex;
flex-direction: column;
justify-content: center;

span{
  font-size: 20px;
  color:goldenrod;
}
p{
  font-size: 13px;
  color:black;
}

`

const Type1 = styled.div`
height: 80px;
width: 80px ;
background-color: red;
border-radius: 10px;
box-shadow: 0 8px 32px 0 rgba(1, 38, 15, 0.19);

img{
  height: 80px;
width: 80px ;
object-fit: cover;
border-radius: 10px;
}
`


const Con1 = styled.div`
height: 110px;
width: 250px;
border-right: 1px solid  white;
display: flex;
justify-content: space-around;
align-items: center;

`
const Con2 = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 130px;
border-right: 1px solid  white;

`
const Con3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
border-right: 1px solid  white;
`
const Con4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
border-right: 1px solid  white;
`
const Con5 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
border-right: 1px solid  white;
`
const Con6 = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-right: 1px solid  white;
width: 40px;
`
const Con7 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
border-right: 1px solid  white;
`
const Con8 = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 60px;
`

const AllContainer = styled.div``
const Container = styled.div``
const Wrapper = styled.div`
display: flex;
height: 110px;
background-color: #EAEAEB;
margin-bottom: 10px;


`