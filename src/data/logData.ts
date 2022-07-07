import { subDays, subHours, subWeeks } from "date-fns";

export const logsItems = [
  {
    id: 1,
    browser: " Safari/537.36",
    ipaddress: "3.70.73.142",
    location: "United States",
    date: subDays(new Date(), 2).getTime(),
  },
  {
    id: 2,
    browser: "Chrome/36.0.1985.67",
    ipaddress: "138.13.136.179",
    location: "UK",
    date: subDays(new Date(), 6).getTime(),
  },
  {
    id: 3,
    browser: "Googlebot/2.1",
    ipaddress: "119.229.170.253",
    location: "UK",
    date: subHours(new Date(), 15).getTime(),
  },
  {
    id: 4,
    browser: "AppleWebKit/535.1",
    ipaddress: "206.8.99.49",
    location: "Philippines",
    date: subDays(new Date(), 4).getTime(),
  },
  {
    id: 5,
    browser: "Mozilla/5.0",
    ipaddress: "235.40.59.85",
    location: "UK",
    date: subWeeks(new Date(), 3).getTime(),
  },
];
