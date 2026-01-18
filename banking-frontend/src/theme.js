import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1e5bd8",
        },
        background: {
            default: "#f4f7ff",
        },
    },
    shape: {
        borderRadius: 16,
    },
    typography: {
        fontFamily: `"Inter", "Poppins", "Roboto", sans-serif`,
        h3: { fontWeight: 800 },
        h4: { fontWeight: 800 },
        h5: { fontWeight: 800 },
        button: { textTransform: "none", fontWeight: 700 },
    },
});

export default theme;
