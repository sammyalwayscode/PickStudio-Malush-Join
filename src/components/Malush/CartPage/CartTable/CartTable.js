import React from 'react'
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import MainData from './MainData'
import RecentName from './RecentName'

function CartTable() {
  return (
    <Container>
      <RecentName />
      <HeaderContent />
      <MainData />

    </Container>
  )
}

export default CartTable
const Container = styled.div`
display: flex;
flex-direction: column;
height: auto;


@media screen and (max-width:1024px){
 display: none;
}

@media screen and (max-width:768px){
 display: none;
}

@media screen and (max-width:425px){
 display: none;
}

@media screen and (max-width:375px){
 display: none;
}

@media screen and (max-width:320px){
 display: none;
}
`
