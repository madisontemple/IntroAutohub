import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import "../index.css";

function C3F() {
  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed.js");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  const FloorClick = () => history.push("./Floor");
  const ContactClick = () => history.push("./Contact");

  

  return (
    <div>
      <AboutMenuPart>
        <AboutListUl>
          <AboutList button type="button" onClick={AboutClick}>
            단지소개
          </AboutList>
          <AboutList button type="button" onClick={FloorClick}>
            층별안내
          </AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList button type="button" onClick={ContactClick}>
            오시는길
          </AboutList>
        </AboutListUl>
      </AboutMenuPart>
<div>
  
</div>
    
    <CarAuction>
    

    <h1 style={{marginBottom:"50px"}}>층별 안내</h1>
    <HR></HR>

    <h2 style={{textAlign:"center",marginTop:"50px",fontFamily:"'Merriweather Sans', sans-serif",letterSpacing:".2rem"}}> - Floor Info - </h2>
    <h2 style={{textAlign:"center",marginTop:"50px",letterSpacing:".2rem"}}> - C동 3층 - </h2>

    <img src="images/C동3층도면.png"  style={{width:"600px"}}/>





    </CarAuction>
      

      
    </div>
  );
}

const AboutMenuPart = styled.div`
margin-top: 100px;
`;
const AboutListUl = styled.ul`
  list-style: none;
  padding-left: 145px;

`;
const AboutList = styled.li`
  float: left;
  margin-left: 60px;
  
  color: black;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;

  display: block;
  position: relative;
  padding: 1em 1;

  &::after {
    content: "";
    position: absolute;
    padding-top: 1px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 400ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.3em, 0);
  }
`;
const CarAuction = styled.div`
padding-top: 60px;
margin-left: 90px;
`;
const HR = styled.hr`
  width: 90%;
  justify-content: center;
  display: flex;

  align-items: center;
`;



export default C3F;