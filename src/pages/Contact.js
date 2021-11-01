import React , { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BiBus } from "react-icons/bi";
import { FaTrain } from "react-icons/fa";
// import "../index.css";


function Contact() {


   

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
          <AboutList button type="button" onClick={AboutClick}>단지소개</AboutList>
          <AboutList button type="button" onClick={FloorClick}>층별안내</AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList button type="button" onClick={ContactClick}>오시는길</AboutList>
        </AboutListUl>
      </AboutMenuPart>

     <MapPart>


        <Adress>주소:경기도 용인시 기흥구 중부대로 242(영덕동 21-1)<br /><br />
        대표전화: 1811-9393</Adress>
        <Line></Line>

     </MapPart>
  <TransitPart>
      <h2 style={{paddingTop:"70px",marginLeft:"80px"}}>대중교통 안내</h2>
        <Subway><FaTrain />지하철<br /><br />
        - 분당선 청명역 1번 출구(버스 환승)<br /><br />
        - 분당선 상갈역 2번 출구(버스 환승)</Subway>
       
        
        <Bus> <BiBus style={{width:"50px",height:"50px"}} /> <p>버스</p><br />
        
       <p>- 시내버스 10,10-5,27,27-1,37,55,66,66-4,28-1,28-2,28-3<br /><br />
        - 시외버스 M5107,1112,5006,5007,5100,G5100,8327,8424,8423,8448,8449</p> </Bus>
  </TransitPart>
    
    
  </div>
  )
}

const AboutMenuPart = styled.div`
 
`;
const AboutListUl = styled.ul`
  list-style: none;
  padding-left: 145px;
  margin-top: 10px;
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
const MapPart = styled.div`
 padding-top: 100px;
 margin-left: 80px;
 font-size: 20px;
 font-weight: 600;

`;
const Adress = styled.p`
`;
const Line = styled.div`
border: solid 1px black;
width: 90%;
`;
const TransitPart = styled.div`

`;
const Subway = styled.p`
padding-top: 20px;
 margin-left: 80px;
 font-size: 20px;
 font-weight: 600;
`;
const Bus = styled.p`
padding-top: 20px;
 margin-left: 80px;
 font-size: 20px;
 font-weight: 600;

 
`;


export default Contact;
