import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#F3F4F6",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#FBE543",
  light: "#FFDA44",
  main: '#12372A',
  dark: "#f9e019",
  darker: "#EA701A",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#fbfbfb",
  light: "#f4f4f4",
  main: "#66667e",
  dark: "#121926",
  darker: "#34415D",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#ccd6f6",
  main: "#00B8D9",
  dark: "#8892b0",
  darker: "#003768",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#fff",
};

const DARK = {
  lighter: "#C1C1C1",
  light: "#797979",
  main: "#1c1d1d",
  dark: "#111111",
  darker: "#454545",
  contrastText: "#fff",
};
const COMMON = {
  common: { black: "#040404", white: "#ffffff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  dark: DARK,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#fff",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === "light" ? light : dark;
}
