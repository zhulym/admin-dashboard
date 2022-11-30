import React, { FC } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import { tokens } from "theme";
import useFetch from 'hooks/useFetch';
import { IDashboardData, StatsTypes } from 'model/app';
import ApiService from 'service/ApiService';

import DashboardStats from './DashboardStats';
import Loader from 'components/loader/Loader';
import BarChart from 'components/bar/BarChart';
import LineChart from 'components/line/LineChart';
import EmailIcon from "@mui/icons-material/Email";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardTransactions from './DashboardTransactions';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import GeographyChart from 'components/geography/GeographyChart';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ProgressCircle from 'components/progress-circle/ProgressCircle';
import DashboardHeader from 'components/dashboard-header/DashboardHeader';

const Dashboard: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useFetch<IDashboardData>(ApiService.getDashboardData);

  if (isLoading) return <Loader />;

  const getStatsIcon = (type: string) => {
    switch (type) {
      case StatsTypes.Email:
        return <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />;
      case StatsTypes.Sale:
        return <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />;
      case StatsTypes.Client:
        return <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />;
      case StatsTypes.Traffic:
        return <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />;
      default:
        return;
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DashboardHeader title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              color: colors.grey[100],
              backgroundColor: colors.blueAccent[700],
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gap="20px"
        gridAutoRows="130px"
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/* ROW 1 */}
        <DashboardStats stats={data?.stats} getStatsIcon={getStatsIcon} />

        {/* ROW 2 */}
        <Box
          gridRow="span 2"
          gridColumn="span 8"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          overflow="auto"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Box
            p="15px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottom={`4px solid ${colors.primary[500]}`}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>

          <DashboardTransactions transactions={data?.transactions} />
        </Box>

        {/* ROW 3 */}
        <Box gridColumn="span 4" gridRow="span 2" p="30px" sx={{ backgroundColor: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" sx={{ backgroundColor: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard />
          </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" padding="30px" sx={{ backgroundColor: colors.primary[400] }}>
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
