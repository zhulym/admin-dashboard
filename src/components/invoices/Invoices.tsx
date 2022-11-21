/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useMemo } from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { tokens } from 'theme';
import useFetch from 'hooks/useFetch';
import { IInvoicesData } from 'model/app';
import ApiService from 'service/ApiService';
import { invoicesGridColumns } from 'constants/invoicesGridColumns';

import Loader from 'components/loader/Loader';
import DashboardHeader from 'components/dashboard-header/DashboardHeader';

const Invoices: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: invoices, isLoading } = useFetch<IInvoicesData[]>(ApiService.getInvoicesData);

  const customCostColumn = useMemo(() => invoicesGridColumns.map(column => (
    column.field === 'cost'
      ? {
        ...column,
        renderCell: (params: any) => <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
      }
      : column)
  ), [colors.greenAccent]);

  if (isLoading) return <Loader />;

  return (
    <Box m="20px">
      <DashboardHeader title="INVOICES" subtitle="List of Invoice Balances" />
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
          rows={invoices || []}
          checkboxSelection
          columns={customCostColumn as GridColDef[]}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
