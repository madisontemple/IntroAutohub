import React, { useRef, useEffect, useState } from "react";

import styled from "styled-components";
import Map from "../shared/Map";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

import Home from "./Home";

function AboutAutohub() {
  const openForm = () =>
    (document.getElementById("myForm").style.display = "block");

  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function Tr({ title, value }) {
    return (
      <tr>
        <td style={{ borderBottom: "1px solid #ddd", padding: "10px 25px" }}>
          {title}
        </td>
        <td style={{ borderBottom: "1px solid #ddd" }}>{value}</td>
        <td style={{ borderBottom: "1px solid #ddd" }}></td>
      </tr>
    );
  }
  function Tr2({ title, value, value2, percentage }) {
    return (
      <tr>
        <td
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px 25px",
          }}
        >
          {title}
        </td>
        <td
          style={{
            borderBottom: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          {value}
        </td>
        <td
          style={{
            borderBottom: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          {value2}
        </td>
        <td
          style={{
            borderBottom: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          {percentage}
        </td>
      </tr>
    );
  }

  return (
    <Body>
      <Header>
        <HeaderListPart>
          <ul>
            <LI button type="button" onClick={AboutAutohub}>
              단지안내
            </LI>
            <LI button type="button" onClick={SellClick}>
              주요특장점
            </LI>
            <LI button type="button" onClick={FloorClick}>
              층별안내
            </LI>
            <LI button type="button" onClick={ContactClick}>
              오시는 길
            </LI>
            <LI button type="button" onClick={SellClick}>
              프로모션
            </LI>
          </ul>
        </HeaderListPart>
      </Header>

      <IntroWrappeer>
        <IntroPart>
          <div className="AHBanner" style={{}}>
            <img
              src="/images/오토허브 소개 배너.png"
              style={{ width: "100%" }}
            />
          </div>

          <div className="AHImagePart" style={{}}>
            <img
              src="/images/오토허브 건물사진4.jpg"
              style={{ width: "1200px", height: "700px" }}
            />
          </div>

          <h2 style={{}}>자동차 매매당지의 패러다임을 바꾼 오토허브 입니다.</h2>
          <p className="TxtContent" style={{}}>
            61,000 여평 규모의 오토허브는 2018년부터 운영된 최초의 대형
            매매단지로서, 현재까지 허위매물 없이 안전하게 단지 운영을 하여
            고객들에게 사랑을 받아오고 있습니다.
            <br />
            <br />
            차량 판매 시설뿐만 아니라 상품화 시설부터 차량등록 사무소까지 단지에
            입점되어있어 상사 운영자와 고객 모두에게 최고의 서비스를 제공하고
            있습니다.
            <br />
            <br />
            또한 전문 식당, 카페,편의점 등이 있어 단지 방문 고객은 편리한 단지
            이용 경험을 할 수 있으며, 이 밖에도 병원, 볼링장, 스크린 골프장 등
            다양한 생활시설도 <br />
            입점해 있어 자동차 복합 문화 공간으로서 완벽한 모습을 갖추고
            있습니다.
          </p>
        </IntroPart>
      </IntroWrappeer>

      <DetailWrapper>
        <DetailPart>
          <h3>세부 면적</h3>
          <p>
            최대8,000대의 실내 전시가 가능하며, 최대1,300대의 고객 주차가 가능한
            대형 복합 단지입니다.
          </p>
          <Button>건축 면적 정보</Button>
          <div className="TablePart" style={{ width: "1200px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: " solid 1px black",
              }}
            >
              <tr style={{}}>
                <th
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: "20px",
                  }}
                >
                  건축 개요
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 25px",
                  }}
                >
                  토지면적
                </td>
                <td style={{ borderBottom: "1px solid #ddd" }}>
                  88,716 ㎡ (26,836,59평)
                </td>
                <td style={{ borderBottom: "1px solid #ddd" }}></td>
              </tr>
              <Tr title="건축연면적" value="175,676,72 ㎡ (53,142.21평)" />
              <Tr title="용도" value="자동차 관련 시설 및 부대시설" />
              <Tr title="층수" value="지하 4층, 지상 4층" />
              <Tr title="건폐율" value="16.81%" />
              <Tr title="용적률" value="55.15%" />

              <tr style={{}}>
                <th
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: "20px",
                  }}
                >
                  용도별 면적
                </th>
              </tr>

              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 25px",
                    textAlign: "center",
                  }}
                >
                  전시장
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  139,520 ㎡
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  (42,205평)
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  79%
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 25px",
                    textAlign: "center",
                  }}
                >
                  용도
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  자동차 관련 시설 및 부대시설
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  토지면적
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  88,716 ㎡ (26,836,59평)
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 25px",
                    textAlign: "center",
                  }}
                >
                  층수
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  지하 4층, 지상 4층
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  토지면적
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  88,716 ㎡ (26,836,59평)
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "10px 25px",
                    textAlign: "center",
                  }}
                >
                  건폐율
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  16.81%
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  토지면적
                </td>
                <td
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  88,716 ㎡ (26,836,59평)
                </td>
              </tr>
            </table>
          </div>
        </DetailPart>
      </DetailWrapper>
    </Body>
  );
}

const Body = styled.body`
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
`;
const Header = styled.div`
  padding: 50px 0;
`;
const HeaderListPart = styled.div`
  padding: 0 200px;
  cursor: pointer;
  font-weight: bold;
`;

const LI = styled.li`
  list-style: none;
  float: left;
  padding: 10px 10px;
`;
const IntroWrappeer = styled.div``;
const IntroPart = styled.div`
  text-align: center;
`;

const DetailWrapper = styled.div`
  /* text-align: center; */
  padding: 30px;
  padding-right: 30px;
`;
const DetailPart = styled.div`
  /* text-align:left; */
  padding: 8%;
  margin: 8%;
`;
const Table = styled.table;
const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px #808080;
`;
export default AboutAutohub;
