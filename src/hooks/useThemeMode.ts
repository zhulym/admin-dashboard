import { createTheme, PaletteMode } from "@mui/material";
import { useMemo, useState } from "react";
import { themeSettings } from "theme";

export const useThemeMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
  }), []);

  const theme = useMemo(() => createTheme(themeSettings(mode as PaletteMode)), [mode]);

  return [theme, colorMode];
};
