import React, { FC } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from 'theme';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

interface IProps {
  access: string;
}

const CustomAccessColumn: FC<IProps> = ({ access }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: `${access === "admin"
          ? colors.greenAccent[600]
          : access === "manager"
            ? colors.greenAccent[800]
            : colors.greenAccent[800]}`
      }}
      width="100%"
      p="8px"
      display="flex"
      justifyContent="center"
      borderRadius="4px"
    >
      {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
      {access === "manager" && <SecurityOutlinedIcon />}
      {access === "user" && <LockOpenOutlinedIcon />}
      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );
};

export default CustomAccessColumn;
