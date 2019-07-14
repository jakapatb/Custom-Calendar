import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import HeaderSection from "./header";
import DateSection from "./date";
import { Event, FormatEvent, CalendarType } from "../../type/calendar";
import _ from "lodash";
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

interface CalendarProps {
  events?: Event[];
  calendarType?: CalendarType[];
}

const Calendar: React.FC<CalendarProps> = ({ events = [],calendarType=[] }) => {
  const [select, setSelect] = useState(dayjs().date());
  const [month, setMonth] = useState(dayjs().month());
  const [infoDate, setInfoDate] = useState([] as Event[]);
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
  const mappingDates = () => {
    let groupType = _.groupBy(events, "type");
    let formatEvents = {};
    _.forEach(groupType, (valueType, type) => {
      let groupTopic = _.groupBy(valueType, "topic");
      /* console.log(groupTopic); */
      let addedStyle: { [x: string]: FormatEvent[] } = {};
      _.forEach(groupTopic, (value, topic) => {
        addedStyle[topic] = value.map((e, index) => {
          let styleType;
          switch (index) {
            case 0:
              styleType = "first";
              break;
            case value.length - 1:
              styleType = "last";
              break;
            default:
              styleType = "mid";
              break;
          }
          if (value.length === 1) styleType = "single";
          return {
            ...e,
            styleType
          };
        });
      });
      formatEvents = { ...formatEvents, [type]: addedStyle };
    });
    const resultEvents = _.map(formatEvents, e => _.map(e))
      .flat()
      .flat();
    console.log(resultEvents);
    return [...Array(lastDate)].map((e, index: number) => {
      const date = index + 1;

      return (
        <DateSection
          key={date}
          select={select}
          setSelect={setSelect}
          setInfoDate={setInfoDate}
          calendarType={calendarType}
          event={resultEvents.filter(
            event => dayjs(event.date).date() === date
          )}
        >
          {date}
        </DateSection>
      );
    });
  };
  return (
    <Container>
      <HeaderSection month={month} setMonth={setMonth} />
      <DateWrapper>
        <DaysInWeek />
        {blankDates()}
        {mappingDates()}
      </DateWrapper>
      {infoDate.map(event => (
        <p>{event.topic}</p>
      ))}
    </Container>
  );
};

export default Calendar;
