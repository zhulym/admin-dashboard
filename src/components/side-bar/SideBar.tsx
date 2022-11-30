import React, { FC, useState } from 'react';
import { Box, useTheme, Typography, IconButton } from '@mui/material';
import { Sidebar, Menu, useProSidebar, MenuItem } from 'react-pro-sidebar';

import { tokens } from 'theme';
import { SIDE_BAR_CHARTS, SIDE_BAR_DATA, SIDE_BAR_PAGES } from 'constants/sideBar';

import SideBarItem from './SideBarItem';
import SideBarUser from './SideBarUser';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import styles from './SideBar.module.scss';

const SideBar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  const onToggleSideBar = () => {
    collapseSidebar(!collapsed);
  };

  return (
    <Box
      height="100%"
      className={styles.container}
      sx={{
        "& .sidebar-inner": {
          background: `${colors.primary[400]}`,
        },
        "& .menu-icon": {
          backgroundColor: "transparent",
        },
        "& .menu-item": {
          "& .menu-anchor": {
            transition: "color 0.3s ease",
          },

          "& .menu-anchor:hover": {
            color: "#868dfb !important",
            backgroundColor: 'transparent'
          },

          "& .menu-anchor.cxRqFw": {
            color: "#6870fa !important",
            backgroundColor: 'transparent'
          },
        },
      }}
    >
      <Sidebar className={styles.sidebar}>
        <Menu>
          <MenuItem
            onClick={onToggleSideBar}
            icon={collapsed && <MenuOutlinedIcon />}
            style={{ margin: "5px 0", color: colors.grey[100] }}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h3" color={colors.grey[100]}>
                  LOGO
                </Typography>
                <IconButton onClick={onToggleSideBar}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && <SideBarUser />}

          <Box>
            <SideBarItem
              title="Dashboard"
              path="/admin-dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "0 0 5px 20px" }}>
              Data
            </Typography>
            {SIDE_BAR_DATA.map(item => (
              <SideBarItem
                key={item.title}
                title={item.title}
                path={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "0 0 5px 20px" }}>
              Pages
            </Typography>
            {SIDE_BAR_PAGES.map(item => (
              <SideBarItem
                key={item.title}
                title={item.title}
                path={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "0 0 5px 20px" }}>
              Charts
            </Typography>
            {SIDE_BAR_CHARTS.map(item => (
              <SideBarItem
                key={item.title}
                title={item.title}
                path={item.path}
                icon={item.icon}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Box>
        </Menu>
        <Typography variant="h4" sx={{ m: "10px 0 5px 30px" }}>
          <a
            href="https://github.com/zhulym"
            style={{ color: colors.greenAccent[500], textDecoration: "none" }}
            target="_blanc"
          >
            &copy; {new Date().getFullYear()} S.Zhulym
          </a>
        </Typography>
      </Sidebar>
    </Box >
  );
};

export default SideBar;
