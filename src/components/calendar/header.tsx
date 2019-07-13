import React from "react";
import dayjs from 'dayjs'
import styled from "styled-components";
import LeftRectangle from "../../assets/images/ic_left.svg";
import RightRectangle from "../../assets/images/ic_right.svg";
const Header = styled.div`
  opacity: 0.87;
  color: #000000;
  letter-spacing: 0.25px;
  width: 100%;
  margin: 1rem 0;
  font-size: 2rem;
  grid-template-columns: 3rem 1fr 3rem;
  justify-content: center;
  text-align: center;
  display: grid;
`;
const HeaderText = styled.div``;
const Rec = styled.img`
  cursor: pointer;
  margin: auto;
`;

interface HeaderProps {
  month: number;
  setMonth: (month: number) => void;
}

const HeaderSection: React.FC<HeaderProps> = ({ month, setMonth }) => {
  return (
    <Header>
      <Rec src={LeftRectangle} onClick={()=>setMonth(month-1)}/>
      <HeaderText>{dayjs().set('month',month).format('MMMM')}</HeaderText>
      <Rec src={RightRectangle} onClick={()=>setMonth(month+1)}/>
    </Header>
  );
};

export default HeaderSection;
