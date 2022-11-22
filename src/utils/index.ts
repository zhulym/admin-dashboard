import { EventInput } from "@fullcalendar/react";

let zero = 0;
export const getRandomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateInitialEvents = () => {
  const events: EventInput[] = [];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  for (let i = 0; i < 10; i++) {
    const randomDay = getRandomNum(1, 30);

    events.push({
      id: i.toString(),
      title: `Event №${i + 1}`,
      date: `${year}-${month + 1}-${randomDay}`,
    });
  }
  return events;
};

export const createEventId = () => {
  return String(zero++);
};
