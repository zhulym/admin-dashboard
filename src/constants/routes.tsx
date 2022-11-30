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
    path: '/admin-dashboard',
    component: <Dashboard />
  },
  {
    path: '/admin-dashboard/team',
    component: <Team />
  },
  {
    path: '/admin-dashboard/contacts',
    component: <Contacts />
  },
  {
    path: '/admin-dashboard/invoices',
    component: <Invoices />
  },
  {
    path: '/admin-dashboard/form',
    component: <ProfileForm />
  },
  {
    path: '/admin-dashboard/bar',
    component: <Bar />
  },
  {
    path: '/admin-dashboard/pie',
    component: <Pie />
  },
  {
    path: '/admin-dashboard/line',
    component: <Line />
  },
  {
    path: '/admin-dashboard/faq',
    component: <Faq />
  },
  {
    path: '/admin-dashboard/calendar',
    component: <Calendar />
  },
  {
    path: '/admin-dashboard/geography',
    component: <Geography />
  },
];
