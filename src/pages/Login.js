import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import AboutAutohub from "./AboutAutohub";
import "../index.css";

function Login() {
  const history = useHistory();
  const HomeClick = () => history.push("./");

  const BuyClick = () => history.push("./Buy");
  const SellClick = () => history.push("./Sell");
  const ManagedClick = () => history.push("./Managed");
  const AboutClick = () => history.push("./AboutAutohub");
  const CCenterClick = () => history.push("./CCenter");
  const JoinClick = () => history.push("./Join");
  const LoginClick = () => history.push("./Login");

  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  return (
    <div style={{marginTop:"50px"}}>
      

      <div className="InputPart" style={{}}>
        <div className="Input" style={{ padding: "15px 130px",marginTop:"50px" }}>
          <SearchInput type="text"></SearchInput>
          <FaSearch
            style={{
              width: "30px",
              height: "30px",
              position: "relative",
              left: "35px",
              bottom: "84px",
              color: "#f11843",
              cursor: "pointer",
            }}
          />
        </div>
       
      </div>
      <div className="MainPart">
        <div className="ImagePart">
          <LoginImage1 src="/images/Login-image1.png" />
        </div>
        <div className="LoginForm" style={{}}>
          <Autohub2Logo src="/images/Autohub2 Logo.png" />
          <Comment1>
            중고차 구매! <br />
          </Comment1>

          <Comment2>
            오토허브에서는 전 차종 직영관리로
            <br />
          </Comment2>
          <Comment3>믿고 구매하실수 있습니다.</Comment3>
          <IDInput placeholder="아이디" />
          <PWInput placeholder="비밀번호" type="password" />
          <LoginButton>로그인</LoginButton>

          <div className="IDCheckBox">
            <IDSave type="checkbox" name="IDSave" />
            <label for="IDSave" style={{ fontSize: "15px" }}>
              아이디 저장
            </label>
          </div>
          <div>
            <WhatAutohub>오토허브가 처음이신가요?</WhatAutohub>
          </div>
          <KakaoLogin>
            <KakaoLogo src="/images/KakaoLogo.png" />
            <Font>카카오톡으로 로그인하기</Font>
          </KakaoLogin>
        </div>
      </div>

      <div class="FooterPart">
        <FooterArea>
          <div class="ListPart">
            <ListMain>
              <UnderLine>
                <About>회사소개</About>
                <FooterList>이용약관</FooterList>
                <FooterList>개인정보처리방침</FooterList>
                <FooterList>마케팅</FooterList>
              </UnderLine>
            </ListMain>
            <OtherLists>
              <p>
                <strong>사업자등록번호 </strong> 454-88-00618
                <strong>개인정보책임자 </strong> 이동녕
              </p>
              <p>
                <strong> 주소 </strong> 경기도 용인시 기흥구 중부대로 242(영덕동
                21-1)
              </p>
              <p>
                <strong> Tel </strong> 1811-9393 <strong> Fax </strong> 031)
                5182-5009 <strong> Email </strong> admin@nsautohub.com
              </p>
              <p>Copyrights © AUTOHUB. All rights reserved.</p>
            </OtherLists>
            <div class="download">
              <DownloadImg src="/images/매물공유 다운로드.png" />
            </div>
          </div>
        </FooterArea>
      </div>
    </div>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-top: -10px;
  padding-right: 0px;
  background: #f11843;
  height: 80px;
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

const LeftsideMenuList = styled.div`
  list-style: none;
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

const RightsideMenuList = styled.div`
  color: white;
  font-weight: 900;
  font-size: 15px;
  cursor: pointer;
  margin-left: -10px;
  padding-right: 30px;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 30px;
  border: solid #f11843 2px;
  font-size: 25px;
  padding-left: 30px;
  outline-width: 0;
  margin-left: 430px;
  position: relative;
  bottom: 90px;
  left: 90px;
`;
const Buttons = styled.div`
  display: flex;
  margin-bottom: 40px;
  padding-left: 160px;
`;
const Button = styled.button`
  margin-top: -45px;
  margin-left: 12px;
  width: 108px;
  height: 40px;

  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  color: #f11843;
  background-color: white;
  transition-duration: 0.2s;
  border: 1px solid #f11843;
  cursor: pointer;
  &:hover {
    background-color: #66180ef6;
    color: white;
  }
`;
const LoginImage1 = styled.img`
  margin-left: 90px;
  width: 600px;
  height: 560px;
  float: left;
`;
const Autohub2Logo = styled.img`
  width: 150px;
  margin-left: 310px;
`;
const Comment1 = styled.h2`
  position: relative;
  left: 330px;
`;
const Comment2 = styled.h2`
  position: relative;
  left: 230px;
  bottom: 20px;
`;
const Comment3 = styled.h2`
  position: relative;
  left: 270px;
  bottom: 40px;
`;

const IDInput = styled.input`
  background-color: #f6f2f2;
  width: 380px;
  height: 50px;
  border: none;
  outline-width: 0;
  margin-left: 180px;
  padding-left: 20px;
  font-weight: 700;
`;
const PWInput = styled.input`
  background-color: #f6f2f2;
  width: 380px;
  height: 50px;
  border: none;
  outline-width: 0;
  margin-left: 180px;
  margin-top: 20px;
  padding-left: 20px;
  font-weight: 700;
`;
const LoginButton = styled.button`
  background-color: #f11843;
  width: 400px;
  height: 50px;
  color: white;
  border-radius: 10px;
  border: none;
  outline-width: 0;
  margin-top: 20px;
  margin-left: 180px;
  font-weight: 700;
  cursor: pointer;
`;
const IDSave = styled.input`
  margin-top: 20px;
  margin-left: 100px;

  transform: scale(2.5);
  width: 50px;
  margin-left: 170px;
  &:checked {
    color: #f11843;
    background-color: #f6f2f2;
  }
`;

const WhatAutohub = styled.a`
  text-decoration: solid underline 1px #717070;
  color: #717070;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  margin-left: 300px;
  position: relative;
  top: 30px;
`;
const KakaoLogin = styled.button`
  width: 400px;
  height: 50px;
  color: #5d3700;
  font-size: 17px;
  font-weight: 900;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #ffe000;
  border-radius: 10px;
  border: none;
  outline-width: 0;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 180px;
  padding-right: 50px;
`;
const KakaoLogo = styled.img`
  width: 40px;
  margin-right: 280px;
  margin-top: 5px;
`;
const Font = styled.p`
  position: relative;
  bottom: 55px;
  left: 20px;
`;

const FooterArea = styled.div`
  margin-top: 60px;
  display: flex;
  /* alignItems: "center", */
  height: 350px;
  width: 100%;
  background: #f0eff0;
`;

const ListMain = styled.div`
  display: flex;
  margin-left: 80px;
  margin-top: 50px;
`;

const UnderLine = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #656565;
`;
const About = styled.li`
  cursor: pointer;
`;
const FooterList = styled.li`
  margin-left: 40px;
  cursor: pointer;
`;

const OtherLists = styled.div`
  padding-left: 90px;
  letter-spacing: 0.3px;
  font-size: 13px;
  font-family: SpoqaHanSans, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #656565;
`;
const DownloadImg = styled.img`
  width: 150px;
  height: 45px;
  border-radius: 10px;
  margin-left: 85px;
  margin-top: 40px;
  cursor: pointer;
`;

export default Login;
