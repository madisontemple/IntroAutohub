import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Kia() {
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
    <div>
      

      <div className="InputPart">
        <div className="Input" style={{ padding: "15px 20px" }}>
          <SearchInput type="text" value="기아"></SearchInput>
          <FaSearch
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
      </div>

      <div style={{}}>
        <span
          style={{ marginLeft: "90px", fontSize: "30px", fontWeight: "700" }}
        >
          차량검색
        </span>
        <span style={{ marginLeft: "20px" }}>최근검색조건</span>
      </div>

      <div>
        <p style={{ marginTop: "40px", marginLeft: "90px", fontWeight: "700" }}>
          추천필터
        </p>
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
  width: 500px;
  height: 50px;
  border-radius: 30px;
  border: solid #f11843 2px;
  font-size: 25px;
  padding-left: 30px;
  outline-width: 0;
  margin-left: 430px;
  margin-top: 30px;
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

export default Kia;
