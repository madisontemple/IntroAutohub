import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import Home from "../pages/Home";
function Navbar() {

  const history = useHistory();
  const HomeClick = () => history.push("./");
  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const AboutAutohub = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");


  

  return (
    <>
      <Menu>
        <AutohubLogo
          src="/images/AUTOHUB Logo.png"
          alt="오토허브 로고"
           button type="button" onClick={HomeClick}
        />
        <nav style={{marginTop:"13px"}}>
          <LeftsideMenuList button type="button" onClick={BuyClick}>살때</LeftsideMenuList>
          <a
              href="http://www.ajsellcar.co.kr/alliance/autohub.do"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
          <LeftsideMenuList button type="button" onClick={SellClick}>팔때</LeftsideMenuList>
          </a>
          <LeftsideMenuList button type="button" onClick={ManagedClick}>직영차</LeftsideMenuList>
          <LeftsideMenuList button type="button" onClick={AboutAutohub}>단지안내</LeftsideMenuList>
          <LeftsideMenuList button type="button" onClick={CCenterClick}>고객센터</LeftsideMenuList>
        </nav>
        <nav style={{marginTop:"13px",marginLeft:"500px"}}>
        <RightsideMenuList  button type="button" onClick={LoginClick}>로그인</RightsideMenuList>
        <RightsideMenuList button type="button" onClick={JoinClick}>회원가입</RightsideMenuList>

        </nav>

        {/* <div style={{ display: "flex", width: "100%" }}>
          <HeaderList>
            <LeftsideMenuList button type="button" onClick={BuyClick}>
              살때
            </LeftsideMenuList>
            <a
              href="http://www.ajsellcar.co.kr/alliance/autohub.do"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <LeftsideMenuList button type="button" onClick={SellClick} >
                팔때
              </LeftsideMenuList>
            </a>
            <LeftsideMenuList  button type="button" onClick={ManagedClick}>
              직영차
            </LeftsideMenuList>
            <LeftsideMenuList  button type="button" onClick={AboutAutohub}>
              단지안내
            </LeftsideMenuList>
            <LeftsideMenuList  button type="button" onClick={CCenterClick}>
              고객센터
            </LeftsideMenuList>
          </HeaderList>

          <Rightside>
            <RightsideMenuList  button type="button" onClick={LoginClick}>
              로그인
            </RightsideMenuList>
            <RightsideMenuList button type="button" onClick={JoinClick}>
              회원가입
            </RightsideMenuList>
          </Rightside>
        </div> */}
      </Menu>
      {/* <AboutMenuPart>
        <AboutListUl>
          <AboutList>단지소개</AboutList>
          <AboutList>층별안내</AboutList>
          <AboutList>단지사진</AboutList>
          <AboutList>특별 프로모션</AboutList>
          <AboutList>오시는길</AboutList>
        </AboutListUl>
      </AboutMenuPart> */}
     
      
      
    </>
  );
}

const Menu = styled.div`
  position: fixed;
  z-index:500;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 1rem;
  display: flex;
  align-items: center;
  /* padding-top: 20px;
  margin-top: -40px;
  padding-right: 0px; */
  background: #f11843;
  height: 50px;
  width: 100%;
  
`;

const AutohubLogo = styled.img`
  width: 150px;
  height: 40px;
  margin-left: 80px;
  cursor: pointer;
  
`;

const HeaderList = styled.div`
  display: flex;
  width: 50%;
`;

const LeftsideMenuList = styled.span`
  margin-left: 40px;
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  
  
`;

const Rightside = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-right: 100px;
  
`;

const RightsideMenuList = styled.span`
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  
margin-left: 55px;
  
  
  
`;
const AboutMenuPart = styled.div`
  background-color: #f11843;
  
  /* margin-bottom: -35px; */
  
`;
const AboutListUl = styled.ul`
  
  list-style: none;
  padding-left: 235px;
  margin-top: -40px;

  background-color: #f11843;
  
  
`;
const AboutList = styled.li`
  float: left;
  margin-left: 30px;
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;

  display: block;
	position: relative;
	padding: 1em 1;
  
  &::after {
  content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0.15em;
	background-color: white;
	opacity: 0;
	transition: opacity 300ms, transform 400ms;
  }
  &:hover::after,
&:focus::after {
	opacity: 1;
	transform: translate3d(0, 0.3em, 0);
}
`;

export default Navbar;
