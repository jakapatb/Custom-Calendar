import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import HeaderSection from "./header";
import DateSection from "./date";
const Container = styled.div`
  font-size: 1.5rem;
`;
const DateCell = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  .tooltipText {
    visibility: hidden;
    width: 12.5rem;
    background-color: black;
    color: #fff;
    text-align: center;
    margin: 1.25rem 0;
    border-radius: 0.375rem;
    position: absolute;
    z-index: 1;
  }
  :hover {
    .tooltipText {
      visibility: visible;
    }
  }
`;
const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 4.5rem 4.5rem 4.5rem 4.5rem 4.5rem 4.5rem 4.5rem;
  background: #fff;
`;

const Day = styled.div`
  opacity: 0.34;

  color: #000000;
`;
const allDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const DaysInWeek = () => (
  <>
    {allDays.map(day => (
      <DateCell key={day}>
        <Day>{day}</Day>
      </DateCell>
    ))}
  </>
);
const mockEvent = [{ date: "2019-07-20", topic: "test", type: "test" }];

const Calendar: React.FC = () => {
  const [select, setSelect] = useState(dayjs().date());
  const [month, setMonth] = useState(dayjs().month());
  const lastDate = dayjs()
    .set("month", month)
    .daysInMonth();

  const blankDates = () => {
    let result: any = [];
    let firstDay =
      dayjs()
        .set("month", month)
        .day() + 1;
    result = [...Array(firstDay)].map((_, index) => (
      <DateCell key={"blank" + index} />
    ));
    return result;
  };

  return (
    <Container>
      <HeaderSection month={month} setMonth={setMonth} />
      <DateWrapper>
        <DaysInWeek />
        {blankDates()}
        {[...Array(lastDate)].map((_, index: number) => (
          <DateSection select={select} setSelect={setSelect}>
            {index + 1}
          </DateSection>
        ))}
      </DateWrapper>
    </Container>
  );
};

export default Calendar;
