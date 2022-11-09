import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from 'theme';

import styles from './SideBar.module.scss';

const SideBarUser: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <div className={styles.avatar}><span>JD</span></div>
      </Box>
      <Box textAlign="center">
        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
          John Doe
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBarUser;
