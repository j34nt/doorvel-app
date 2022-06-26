import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const doorvelTheme = createTheme({
    palette: {
        primary: {
            main:'#083F37'
        },
        secondary: {
            main:'#FF7F57'
        },
        error: {
            main:red.A400
        }
    }
})   
