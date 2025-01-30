import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import customShadows from "./customShadows";
import { fontFaces } from "./fontFace";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeDirection = "ltr";
  const themeMode = "light";
  const themeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      shape: { borderRadius: 8 },
      direction: themeDirection,
      fontFaces: fontFaces,
      customShadows: customShadows(themeMode),
    }),
    [themeDirection, themeMode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
