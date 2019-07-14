import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { FormatEvent, CalendarType } from "../../type/calendar";
const DateCell = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  user-select: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 100;
  height: 100%;
`;
const TodayNode = styled.div`
  position: absolute;
  z-index: -1;
  align-self: center;
  background: #4a90e2;
  width: 3rem;
  height: 3rem;
  margin: auto;
  border-radius: 3.125rem;
`;
const SelectNode = styled.div`
  position: absolute;
  z-index: 0;
  align-self: center;
  border: 0.125rem solid #9b9b9b;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.12);
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  border-radius: 3.125rem;
`;
const SecondaryEvent = styled.div<any>`
  position: absolute;
  z-index: -2;
  align-self: center;
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;

  border-radius: 3.125rem;
  ${({ styleType, color }) => {
    let result = `background: ${color};`;
    switch (styleType.styleType) {
      case "first":
        return result + ` border-radius:3.125rem 0 0 3.125rem; width:100%;`;
      case "last":
        return result + ` border-radius:0 3.125rem 3.125rem 0; width:100%;`;
      case "mid":
        return result + ` border-radius:0; width:100%;`;
      default:
        return result;
    }
  }}
`;

const PrimaryEvent = styled.div<any>`
  position: absolute;
  z-index: -3;
  align-self: center;
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  border-radius: 3.125rem;
  ${({ styleType, color }) => {
    let result = `background: ${color};`;
    switch (styleType.styleType) {
      case "first":
        return result + ` border-radius:3.125rem 0 0 3.125rem; width:100%;`;
      case "last":
        return result + ` border-radius:0 3.125rem 3.125rem 0; width:100%;`;
      case "mid":
        return result + ` border-radius:0; width:100%;`;
      default:
        return result;
    }
  }}
`;

interface DateProps {
  setInfoDate?: any;
  calendarType?: CalendarType[];
  event: FormatEvent[];
  select: number;
  setSelect: (select: number) => void;
  children: number;
}
const DateSection: React.FC<DateProps> = ({
  calendarType = [],
  setInfoDate,
  select,
  setSelect,
  children,
  event
}) => {
  return (
    <DateCell
      onClick={() => {
        setInfoDate(event);
        setSelect(children);
      }}
    >
      {children}
      {dayjs().date() === children && <TodayNode />}
      {select === children && <SelectNode />}
      {event.map((el, index) => {
        switch (el.type) {
          case calendarType[0].name:
            return (
              <PrimaryEvent
                key={index}
                styleType={event.find(el => el.type === calendarType[0].name)}
                color={calendarType[0].color}
              />
            );
          default:
            return (
              <SecondaryEvent
                key={index}
                styleType={event.find(el => el.type === calendarType[1].name)}
                color={calendarType[1].color}
              />
            );
        }
      })}
    </DateCell>
  );
};

export default DateSection;
