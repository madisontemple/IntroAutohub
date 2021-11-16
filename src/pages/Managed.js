import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Managed() {
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
      

      <div className="BannerPart" style={{marginTop:"100px"}}>
        <img
          className="Banner"
          src="/images/Managed_car.png"
          style={{ marginTop: "40px", marginLeft: "120px" }}
        />
      </div>

      <div className="InputPart" style={{ padding: "15px 20px" }}>
        <SearchInput placeholder="쉽고 빠른 직영차 검색 (예: 'BMW320D'를 입력하세요.)"></SearchInput>
        <FaSearch
          style={{
            width: "30px",
            height: "30px",
            position: "relative",
            right: "50px",
            top: "8px",
            color: "#f11843",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="MainPart">
        <p
          style={{
            fontSize: "25px",
            fontWeight: "700",
            marginLeft: "120px",
            marginTop: "50px",
          }}
        >
          현재<span style={{ color: "#f11843" }}>144</span>대의 차량을보유하고
          있습니다.
        </p>
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
  border: solid 2px #f11843;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 430px;
  outline-width: 0;
  font-size: 17px;
  padding-left: 20px;
`;

export default Managed;
