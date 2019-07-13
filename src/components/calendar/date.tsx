import React from "react";
import styled from "styled-components";
const DateCell = styled.div<any>`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ select }) => select && "background:#f2f99f;"}
`;
interface DateProps {
  select: number;
  setSelect: (select: number) => void;
  children: number;
}
const DateSection: React.FC<DateProps> = ({ select, setSelect, children }) => {
  return (
    <DateCell select={select === children} onClick={() => setSelect(children)}>
      {children}
    </DateCell>
  );
};

export default DateSection;
