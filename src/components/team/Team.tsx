/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { tokens } from 'theme';
import { ITeamData } from 'model/app';
import useFetch from 'hooks/useFetch';
import ApiService from 'service/ApiService';
import { teamGridColumns } from 'constants/teamGridColumns';

import Loader from 'components/loader/Loader';
import CustomAccessColumn from './CustomAccessColumn';
import DashboardHeader from 'components/dashboard-header/DashboardHeader';

const Team: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: team, isLoading } = useFetch<ITeamData[]>(ApiService.getTeamData);

  const customAccessColumn = useMemo(() => teamGridColumns.map(column => (
    column.field === 'accessLevel'
      ? { ...column, renderCell: (params: any) => <CustomAccessColumn access={params.row.access} /> }
      : column)
  ), []);

  if (isLoading) return <Loader />;

  return (
    <Box m="20px">
      <DashboardHeader title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={team || []}
          columns={customAccessColumn as GridColDef[]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Team;
