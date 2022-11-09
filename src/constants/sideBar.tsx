import React from 'react';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

export const SIDE_BAR_DATA = [
  {
    title: "Manage Team",
    path: "/team",
    icon: <PeopleOutlinedIcon />
  },
  {
    title: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />
  },
  {
    title: "Invoices Balances",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />
  },
];

export const SIDE_BAR_PAGES = [
  {
    title: "Profile Form",
    path: "/form",
    icon: <PersonOutlinedIcon />
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />
  },
  {
    title: "FAQ Page",
    path: "/faq",
    icon: <HelpOutlineOutlinedIcon />
  },
];

export const SIDE_BAR_CHARTS = [
  {
    title: "Bar Chart",
    path: "/bar",
    icon: <BarChartOutlinedIcon />
  },
  {
    title: "Pie Chart",
    path: "/pie",
    icon: <PieChartOutlineOutlinedIcon />
  },
  {
    title: "Line Chart",
    path: "/line",
    icon: <TimelineOutlinedIcon />
  },
  {
    title: "Geography Chart",
    path: "/geography",
    icon: <MapOutlinedIcon />
  },
];
