import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { ITransaction } from 'model/app';

interface IProps {
  transactions?: ITransaction[];
}

const DashboardTransactions: FC<IProps> = ({ transactions }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {transactions?.map((transaction: ITransaction,) => (
        <Box
          key={transaction.txId}
          p="15px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottom={`4px solid ${colors.primary[500]}`}
        >
          <Box>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              fontWeight="600"
            >
              {transaction.txId}
            </Typography>
            <Typography color={colors.grey[100]}>
              {transaction.user}
            </Typography>
          </Box>
          <Box color={colors.grey[100]}>{transaction.date}</Box>
          <Box p="5px 10px" borderRadius="4px" sx={{ backgroundColor: colors.greenAccent[500] }}>
            ${transaction.cost}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default DashboardTransactions;
