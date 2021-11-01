import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
// import "../index.css";

function Floor() {
  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed.js");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  

  const FloorClick = () => history.push("./Floor");
  const ContactClick = () => history.push("./Contact");

  const C4FClick = () => history.push("./C4F");
  const C3FClick = () => history.push("./C3F");

  useEffect(() => {
    Aos.init({ duration: 2000 });
}, [])

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
      
      <div style={{position: "relative;"}}>
        <AHBuilding1 src="/images/오토허브건물2.jpeg" />
        <AHBuilding2 src="/images/오토허브 단지1.jpeg" />
          <AHBuilding3 src="/images/오토허브 단지2.jpeg" />
          <AHBuilding4 src="/images/오토허브 단지3.jpeg" />
      </div>
      
      <AboutFloor data-aos="fade-up">
      <FloorInfo> - Floor Info -</FloorInfo>
      </AboutFloor>

      <FloorTable>
        <HR data-aos="fade-up"></HR>
        <Comment data-aos="fade-up">
          "아래의 각 층 <Comment1> 클릭 </Comment1>시 상세안내로 이동할 수
          있습니다."
        </Comment>

        <ImagePart data-aos="fade-up">
          <AutohubBuilding src="/images/Autohub_BuldingFloor.png" />
          
        </ImagePart>

        {/* <Table>
  <Tr>
    <Th>A동</Th>
    <Th>B동</Th>
    <Th>C동</Th>
  </Tr>

  </Table> */}
        <InfoTable style={{}} data-aos="fade-up">
          <Table1 style={{ width: "290px", marginRight: "50px",position:"relative",left:"20px",bottom:"7px" }}>
            <Tr1>
              <Th1 style={{}}>C동</Th1>
            </Tr1>
            <Tr1 button type="button" onClick={C4FClick}>
              <Td1>
                <span style={{ marginRight: "70px" ,color:"#2E86C1" }}>4F</span>
                자동차경매실
              </Td1>
            </Tr1>
            <Tr1>
              <Tr1 button type="button" onClick={C3FClick}>
                <Td1>
                  <span
                    style={{
                      marginRight: "75px",
                      position: "relative",
                      top: "8px",right:"3px",color:"#2E86C1"
                    }}
                  >
                    3F
                  </span>
                  <span style={{}}>
                    세차 , 광택
                    <br />
                    
                    <span style={{marginLeft:"80px"}}>타이어 , 휠 복원</span>
                  </span>
                </Td1>
              </Tr1>
            </Tr1>
            <Tr1>
              
              <Td1>
                <span style={{ marginRight: "80px" ,position:"relative",color:"#2E86C1" }}>2F</span>
                차량 정비
              </Td1>
            </Tr1>
            <Tr1>
              
              <Td1>
                <span style={{ marginRight: "75px" ,color:"#2E86C1"}}>1F</span>
                선능점검장
              </Td1>
            </Tr1>
            <Tr1>
             
              <Td1>
                <span style={{ marginRight: "40px",color:"#2E86C1",position:"relative",right:"5px" }}>B1F</span> 자동차 용품
                전문점
              </Td1>
            </Tr1>
            <Tr1>
              
              <Td1>
                <span style={{ marginRight: "60px" ,color:"#2E86C1",position:"relative",right:"7px" }}>B2F</span>엔카 포토존
              </Td1>
            </Tr1>
            <Tr1>
             
              <Td1>
                <span style={{ marginRight: "60px" ,color:"#2E86C1",position:"relative",right:"7px"}}>B3F</span>
                차량 전시장
              </Td1>
            </Tr1>
          </Table1>

          <Table1
            style={{ width: "290px", marginRight: "70px", marginTop: "30px",position:"relative",left:"20px" }}
          >
            <Tr1>
              <Th1 style={{}}>B동</Th1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "78px" ,color:"#2E86C1"}}>4F</span>
                고객 주차장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "78px" ,color:"#2E86C1"}}>3F</span>
                고객 주차장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "78px",color:"#2E86C1" }}>2F</span>
                고객 주차장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "78px",color:"#2E86C1" }}>1F</span>
                고객 주차장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "68px" ,color:"#2E86C1",position:"relative",right:"5px"}}>B1F</span>
                차량 전시장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "68px",color:"#2E86C1" ,position:"relative",right:"5px" }}>B2F</span>
                차량 전시장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "68px" ,color:"#2E86C1" ,position:"relative",right:"5px"}}>B3F</span>
                차량 전시장
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "68px" ,color:"#2E86C1" ,position:"relative",right:"5px"}}>B4F</span>
                차량 전시장
              </Td1>
            </Tr1>
          </Table1>

          <Table1 style={{ width: "600px", marginRight: "20px",marginTop:"38px" }}>
            <Tr1>
              <Th1 style={{}}>A동</Th1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "80px" ,color:"#f11843"}}>4F</span>
                <span style={{marginLeft:"90px"}}>볼링장, 골프장, 키즈카페, 헬스장</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "70px" ,color:"#f11843"}}>3F</span>
                <span style={{marginLeft:"90px"}}>매매상사, 식당, 카페, 편의점, 사무실</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "70px" ,position:"relative", top:"10px",color:"#f11843"}}>2F</span>
                <span style={{ marginLeft: "60px" }}>
                  {" "}
                  매매상사, 고객지원센터, 차량등록사무소, 카페{" "}
                </span>{" "}
                <br />{" "}
                <span style={{ marginLeft: "180px" }}>
                  편의점, 병원, 약국, 중앙정원, 사무실
                </span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "70px" ,color:"#f11843"}}>1F</span>
                <span style={{marginLeft:"40px"}}>매매상사, 특별전시장 ,카페, 금융사, 용인시 지부 사무실</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "90px" ,color:"#f11843",position:"relative",right:"5px"}}>B1F</span>
                <span style={{marginLeft:"140px"}}>차량 전시장</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "90px" ,color:"#f11843",position:"relative",right:"5px"}}>B2F</span>
                <span style={{marginLeft:"140px"}}>차량 전시장</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "90px" ,color:"#f11843",position:"relative",right:"5px"}}>B3F</span>
                <span style={{marginLeft:"140px"}}>차량 전시장</span>
              </Td1>
            </Tr1>
            <Tr1>
              <Td1>
                <span style={{ marginRight: "90px" ,color:"#f11843",position:"relative",right:"5px"}}>B4F</span>
                <span style={{marginLeft:"110px"}}>매매상사,차량 전시장</span>
              </Td1>
            </Tr1>
          </Table1>
        </InfoTable>
      </FloorTable>

      
    </div>
  );
}

const AboutMenuPart = styled.div`
margin-top: 100px;

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
z-index: 300;
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
const AHBuilding1 = styled.img`
width: 100%;
height: 400px;
margin-top: 140px;


-webkit-animation: kenburns-bottom 5s ease-out both;
	        animation: kenburns-bottom 5s ease-out both;

          @-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
 100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}
@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}         
  
`;
const AHBuilding2 = styled.img`
width: 100%;
height: 400px;
margin-top: 140px;


-webkit-animation: kenburns-bottom 5s ease-out both;
	        animation: kenburns-bottom 5s ease-out both;

          @-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
 100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}
@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}         
  
`;
const AHBuilding3 = styled.img`
width: 100%;
height: 400px;
margin-top: 140px;


-webkit-animation: kenburns-bottom 5s ease-out both;
	        animation: kenburns-bottom 5s ease-out both;

          @-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
 100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}
@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}         
  
`;
const AHBuilding4 = styled.img`
width: 100%;
height: 400px;
margin-top: 140px;


-webkit-animation: kenburns-bottom 5s ease-out both;
	        animation: kenburns-bottom 5s ease-out both;

          @-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
 100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}
@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 84%;
            transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(15px);
            transform: scale(1.25) translateY(15px);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
  }
}         
  
`;
const AboutFloor = styled.div`
 background-color:#f11843 ;
height: 70px;
 width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  z-index: 500;
  margin-top: 50px;
  margin-left: 38%;
  display: flex;
  justify-content: center;

  
 


`;
const FloorInfo = styled.h2`
color: white;
letter-spacing: .7rem;
font-family: 'Merriweather Sans', sans-serif;
`;

const FloorTable = styled.div`
  padding-top: 40px;
`;
const HR = styled.hr`
  width: 90%;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Comment = styled.span`
  font-size: 20px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Comment1 = styled.span`
  font-size: 20px;
  color: #f11843;
`;

const ImagePart = styled.div`
  max-width: 1300px;
  min-width: 340px;
  margin : 0 auto
  /* justify-content: center;
  align-items: center;
  text-align: center; */
`;
const AutohubBuilding = styled.img`
  width: 100%;
  height: 200px;
  /* margin-top: 50px;
  margin-left: 80px;
  display: flex; */
`;

const InfoTable = styled.div`
  margin-left: 30px;
  max-width: 1500px;
  min-width: 340px;
  /* flex-wrap: initial; */
  display: flex;
  flex-grow: 0;
  margin : 0 auto;
  justify-content: center;
  align-items: center;
`;
const CTable = styled.div``;
const BTable = styled.div``;
const ATable = styled.div``;

const Table1 = styled.table`
  border-collapse: separate;
  border-spacing: 0 0 15px 15px;
  /* table-layout: fixed; */
  width: auto;
  

`;
const Tr1 = styled.tr``;
const Th1 = styled.th`
  border-top: 3px solid #444444;
  border-bottom: 2px solid #444444;
  height: 30px;
  cursor: pointer;
  padding: 15px;
  &:hover {
    background-color: #e8e8e8;
  }
`;
const Td1 = styled.td`
  border-bottom: 1px solid #444444;

  font-weight: 700;
  height: 30px;
  width: 300px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e8e8e8;
  }
`;
const Th2 = styled.th`
  border-bottom: 1px solid #444444;
  text-align: center;
  height: 30px;
  width: 400px;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const Input = styled.input`
  display: none;
  &:input:checked ~ .HiddenImage {
    padding: 10px 0;
    height: auto;
    opacity: 1;
  }
`;


export default Floor;

