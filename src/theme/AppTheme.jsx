import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { doorvelTheme } from "./doorvelTheme";


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={doorvelTheme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
