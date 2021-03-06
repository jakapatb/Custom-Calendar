export interface Event {
  date: string;
  topic: string;
  type: string;
}

export interface FormatEvent {
  date: string;
  topic: string;
  type: string;
  styleType: string;
}
export interface CalendarType {
  name: string;
  color :string;
}