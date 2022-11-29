import React, { FC } from 'react';
import { Box } from "@mui/material";

import BarChart from './BarChart';
import DashboardHeader from 'components/dashboard-header/DashboardHeader';

const Bar: FC = () => {
  return (
    <Box m="20px">
      <DashboardHeader title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
