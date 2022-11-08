import React, { FC, useContext } from 'react';
import { Box, IconButton, InputBase, useTheme } from '@mui/material';

import { tokens, ColorModeContext } from 'theme';

import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const TopBar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const onToggleMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} gap={2}>
      <Box
        display="flex"
        borderRadius={1}
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <InputBase
          sx={{ pl: 1, flex: 1 }}
          placeholder="Search"
        />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex" borderRadius={1} sx={{ backgroundColor: colors.primary[400] }}>
        <IconButton type="button" onClick={onToggleMode}>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton type="button">
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton type="button">
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton type="button">
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
