import React from "react";
import "./App.css";
import Calendar from "./components/calendar";
import { Event } from "./type/calendar";
const mockEvent = [
  { date: "2019-07-16", topic: "none1", type: "etc" },
  { date: "2019-07-17", topic: "none1", type: "etc" },
  { date: "2019-07-17", topic: "none2", type: "secondary" },
  { date: "2019-07-18", topic: "none2", type: "secondary" },
  { date: "2019-07-18", topic: "test", type: "primary" },
  { date: "2019-07-19", topic: "test", type: "primary" },
  { date: "2019-07-20", topic: "test", type: "primary" },
  { date: "2019-07-21", topic: "test", type: "primary" },
  { date: "2019-07-20", topic: "none", type: "secondary" },
  { date: "2019-07-21", topic: "none", type: "secondary" },
  { date: "2019-07-22", topic: "none", type: "secondary" },
  { date: "2019-07-23", topic: "none5", type: "etc" },
  { date: "2019-07-21", topic: "none5", type: "etc" },
  { date: "2019-07-22", topic: "none5", type: "etc" },
  { date: "2019-07-23", topic: "no", type: "ete2" }
];
const mockCalendarType = [
  {name:'primary' , color:'#4B4B4B'},
  {name:'secondary', color:'#7D7D7D'},
  {name:'etc', color:'#55c2ac'},
  {name:'etc2', color:'#55c244'}
]
const App: React.FC = () => {
  return (
    <div className="App">
      <Calendar events={mockEvent as Event[]} calendarType={mockCalendarType}/>
    </div>
  );
};

export default App;
