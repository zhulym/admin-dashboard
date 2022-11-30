import React, { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';

import { tokens } from 'theme';
import { IStats } from 'model/app';

import StatBox from 'components/stat-box/StatBox';

interface IProps {
  stats?: IStats[];
  getStatsIcon: (type: string) => ReactNode;
}

const DashboardStats: FC<IProps> = ({ stats, getStatsIcon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {stats?.map(item => (
        <Box
          key={item.title}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <StatBox
            title={item.title}
            subtitle={item.subtitle}
            progress={item.progress}
            increase={item.increase}
            icon={getStatsIcon(item.subtitle)}
          />
        </Box>
      ))}
    </>
  );
};

export default DashboardStats;
