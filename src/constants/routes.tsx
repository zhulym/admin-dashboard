import React from 'react';
import Bar from 'components/bar/Bar';
import Calendar from 'components/calendar/Calendar';
import Contacts from 'components/contacts/Contacts';
import Dashboard from 'components/dashboard/Dashboard';
import Faq from 'components/faq/Faq';
import ProfileForm from 'components/form/ProfileForm';
import Geography from 'components/geography/Geography';
import Invoices from 'components/invoices/Invoices';
import Line from 'components/line/Line';
import Pie from 'components/pie/Pie';
import Team from 'components/team/Team';

export const ROUTES = [
  {
    path: '/',
    component: <Dashboard />
  },
  {
    path: '/team',
    component: <Team />
  },
  {
    path: '/contacts',
    component: <Contacts />
  },
  {
    path: '/invoices',
    component: <Invoices />
  },
  {
    path: '/form',
    component: <ProfileForm />
  },
  {
    path: '/bar',
    component: <Bar />
  },
  {
    path: '/pie',
    component: <Pie />
  },
  {
    path: '/line',
    component: <Line />
  },
  {
    path: '/faq',
    component: <Faq />
  },
  {
    path: '/calendar',
    component: <Calendar />
  },
  {
    path: '/geography',
    component: <Geography />
  },
];
