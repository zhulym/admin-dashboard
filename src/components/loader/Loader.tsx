import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

// marginLeft: '250px' - width of sidebar
const Loader: FC = () => {
  return (
    <Backdrop sx={{
      color: '#fff',
      zIndex: (theme) => theme.zIndex.drawer + 1
    }} open
    >
      <CircularProgress color="inherit" sx={{ marginLeft: '250px' }} />
    </Backdrop>
  );
};

export default Loader;
