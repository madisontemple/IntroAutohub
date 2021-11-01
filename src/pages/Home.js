import React from "react";
import styled from "styled-components";
import Search from "../icon/search-solid.svg";
// import Navbar from "./Navbar";
import { SearchBox } from "react-instantsearch-dom";
import { useHistory } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";


function Home() {
  const history = useHistory();
  // const BuyClick = () => history.push("./Buy");
  // const SellClick = () => history.push("./Sell");
  // const ManagedClick = () => history.push("./Managed");
  // const AboutAutohub = () => history.push("./AboutAutohub");
  // const CCenterClick = () => history.push("./CCenter");
  // const JoinClick = () => history.push("./Join");
  // const LoginClick = () => history.push("./Login");

  const SearchClick = () => history.push("./SearchResult");
  const HyundaiClick = () => history.push("./Hyundai");
  const KiaClick = () => history.push("./Kia");
  const BenzClick = () => history.push("./Benz");
  const BmwClick = () => history.push("./Bmw");
  const GenesisClick = () => history.push("./Genesis");

  const Shop1Click = () => history.push("./Shop1");
  const Shop2Click = () => history.push("./Shop2");
  const Shop3Click = () => history.push("./Shop3");
  const Shop4Click = () => history.push("./Shop4");

  return (
    <div style={{}}>
      <Header>
        <Header2>
          <div style={{ height: "350px", display: "flex", width: "100%",marginTop:"30px" }}>
            <LeftImage src="/images/Autohub.HeadersLeft.png" />

            <SearchPart>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "40px 20px",
                }}
              >
                <SearchComment>
                  지금 바로 키워드로 검색해보세요! 무엇이든 찾아드립니다.
                </SearchComment>
              </div>
              <div className="InputPart" style={{ padding: "15px 20px" }}>
                <SearchInput></SearchInput>
                <FaSearch
                  button
                  type="button"
                  onClick={SearchClick}
                  style={{
                    width: "30px",
                    height: "30px",
                    position: "relative",
                    right: "50px",
                    top: "5px",
                    color: "#f11843",
                    cursor: "pointer",
                  }}
                />
              </div>
              <Buttons>
                <Button button type="button" onClick={HyundaiClick}>
                  현대
                </Button>
                <Button button type="button" onClick={KiaClick}>
                  기아
                </Button>
                <Button button type="button" onClick={BenzClick}>
                  벤츠
                </Button>
                <Button button type="button" onClick={BmwClick}>
                  Bmw
                </Button>
                <Button button type="button" onClick={GenesisClick}>
                  제네시스
                </Button>
              </Buttons>
            </SearchPart>
          </div>
        </Header2>
      </Header>

      <div class="MainContents" style={{ minWidth: "1500px" }}>
        <MainComment>인기있는4대의 자동차</MainComment>
        <ImagePart>
          <MainPart>
            <a href="https://blog.naver.com/ats00673" target="_blank">
              {" "}
              <MainImage src="/images/Autohub.Main1.png" />{" "}
            </a>
          </MainPart>
          <div class="OtherPart">
            <Other1
              src="/images/Autohub.Main2.png"
              button
              type="button"
              onClick={Shop1Click}
            />
            <Other2
              src="/images/Autohub.Main3.png"
              button
              type="button"
              onClick={Shop2Click}
            />
            <Other3
              src="images/Autohub.Main4.png"
              button
              type="button"
              onClick={Shop3Click}
            />
            <Other4
              src="images/Autohub.Main5.png"
              button
              type="button"
              onClick={Shop4Click}
            />
          </div>
        </ImagePart>
      </div>

      <div class="FinestPart" style={{ minWidth: "1500px" }}>
        <a
          href="https://www.finset.io/loan/compareGoods?promotionCode=autohub"
          target="_blank"
        >
          <FinsetN src="images/FinsetImage.png" />
        </a>
      </div>

      <div class="HelpPart" style={{ display: "flex", minWidth: "1500px" }}>
        <div class="FaqPart">
          <FAQ>FAQ</FAQ>

          <FAQListPart>
            <FaqList>차량 구매시 필요서류는 무엇인가요?</FaqList>

            <FaqList>차량 구매 시 카드로 구매가 가능한가요?</FaqList>

            <FaqList>대차구매(차량밎교환)가 가능한가요?</FaqList>
          </FAQListPart>
        </div>
        <div class="CCPart">
          <CC>고객센터</CC>

          <CCInfo>
            <PNumber>1811-9393</PNumber>

            <Hour>
              연중무휴
              <br />
              09:00 ~ 18:00
            </Hour>
          </CCInfo>
          <Location>
            <Nav>위치안내</Nav>

            <FiArrowRightCircle
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                bottom: "30px",
                left: "250px",
                color: "#f11843",
                cursor: "pointer",
              }}
            />
          </Location>
          <OnetoOne>
            <Ask>1:1 문의</Ask>
            <FiArrowRightCircle
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                bottom: "30px",
                left: "250px",
                color: "#f11843",
                cursor: "pointer",
              }}
            />
          </OnetoOne>
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

const Header = styled.div`
  width: 100%;
  max-width: 1500px;
  min-width: 340px;
  /* flex-wrap: initial; */
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  
  background: #f11843;
  /* overflow: hidden; */
  
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin-top: -10px;
  padding-right: 0px;
  background: #f11843;
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
  margin-left: 30px;

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
  padding-right: 60px;
`;

const Header2 = styled.div`
  display: flex;
  min-width: 1500px;
  align-items: center;
  background: #f11843;
  align-items: center;
`;
const LeftImage = styled.img`
  height: 230px;
  width: 600;
  margin-top: 80px;
  margin-left: 70px;
`;
const SearchPart = styled.div`
  width: 50%;
  background: #f11843;
`;
const SearchComment = styled.div`
  color: white;
  font-weight: 700;
  position: relative;
  top: 30px;
  left: 10px;
`;
const SearchInput = styled.input`
  width: 600px;
  height: 70px;
  border-radius: 30px;
  font-size: 25px;
  padding-left: 30px;
  border: none;
  outline-width: 0;
`;
//  const SearchIcon = styled.FaSearch`

//  `;

const Buttons = styled.div`
  background: #f11843;
  padding: 20px 10px;
`;
const Button = styled.button`
  margin-left: 18px;

  width: 108px;
  height: 40px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  background-color: #f11843;
  transition-duration: 0.2s;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: #66180ef6;
    color: white;
  }
`;

const MainComment = styled.div`
  color: black;
  font-size: 30px;
  font-weight: 700;
  padding-top: 70px;
  margin-left: 80px;
  white-space: nowrap;
`;
const ImagePart = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 20px;
  margin-left: 80px;
  margin-top: -100px;
`;
const MainPart = styled.div``;
const MainImage = styled.img`
  width: 600px;
  height: 655px;
  margin-top: 190px;
  margin-left: 0px;
  border-radius: 20px;
  cursor: pointer;
`;
const Other1 = styled.img`
  width: 320px;
  margin-top: 190px;
  margin-left: 20px;
  border-radius: 20px;
  cursor: pointer;
  object-position: center;
`;
const Other2 = styled.img`
  width: 320px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 20px;
  height: 315px;
  cursor: pointer;
  object-position: center;
`;
const Other3 = styled.img`
  width: 320px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 20px;
  cursor: pointer;
  object-position: center;
`;
const Other4 = styled.img`
  width: 320px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 20px;
  cursor: pointer;
  object-position: center;
`;
const FinsetN = styled.img`
  width: 80vw;

  height: 20vw;
  margin-top: 100px;
  margin-left: 80px;
  border-radius: 20px;
  cursor: pointer;
  min-width: 1280px;
  object-fit: fill;
`;

const FAQ = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-left: 80px;
  margin-top: 60px;
  border-bottom: 1px solid #d4d3d3;
  width: 560px;
  padding-bottom: 30px;
`;
const FAQListPart = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-left: 90px;
  margin-top: 10px;
`;
const FaqList = styled.div`
  border-bottom: 1px solid #d4d3d3;
  margin-top: 0px;
  padding-top: 10px;
  margin-left: -10px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
  width: 550px;
  cursor: pointer;
`;
const CC = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-top: 70px;
  margin-left: 10px;
  min-width: 1500px;
`;

const CCInfo = styled.div`
  width: 25vw;
  height: 13vw;
  border: 1px solid #d4d3d3;
  border-radius: 10px;
  margin-top: 17px;
  margin-left: 10px;
`;
const PNumber = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #f11843;
  margin-top: 15px;
  margin-left: 20px;
`;

const Hour = styled.div`
  font-weight: 700;
  color: #aeacac;
  margin-top: 90px;
  margin-left: 25px;
`;

const Location = styled.div`
  width: 21vw;
  height: 6vw;
  border: 1px solid #d4d3d3;
  border-radius: 10px;
  margin-left: 380px;
  position: relative;
  bottom: 190px;
`;

const Nav = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #aeacac;
  margin-top: 30px;
  margin-left: 20px;
  min-width: 1500px;
`;
const OnetoOne = styled.div`
  width: 21vw;
  height: 6vw;
  border: 1px solid #d4d3d3;
  border-radius: 10px;
  position: relative;
  left: 380px;
  bottom: 180px;
`;
const Ask = styled.div`
  font-size: 20px;
  color: #aeacac;
  font-weight: 700;
  margin-top: 30px;
  margin-left: 20px;
  min-width: 1500px;
`;
const FooterArea = styled.div`
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
  letter-spacing: 1px;
  font-size: 14px;
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

export default Home;
