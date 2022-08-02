import { Container, createTheme, ThemeProvider, Grid } from "@mui/material";
import heroImage from "../../assets/new-face-removebg-preview.png";
import Cta from "../cta/Cta";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ef6c00",
      light: "#e65100",
    },
    success: {
      main: "#ffe0b2",
    },
  },
});

const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} alignSelf="center" marginTop={13} marginBottom={2}>
            <Cta />
          </Grid>

          <Grid item xs={12} textAlign="center" alignSelf="center">
            <img
              style={{
                borderRadius: " 0 0 10rem 10rem",
                maxWidth: "14.5rem",
                border: "0.1rem solid #ef6c00",
                boxShadow: 3,
              }}
              src={heroImage}
              alt="heroImage"
            />
          </Grid>
          <Grid
            item
            className="animate__animated animate__slideOutDown animate_faster animate__infinite"
            xs={12}
            textAlign="center"
            alignSelf="center"
            marginTop={4}
          >
            <KeyboardDoubleArrowDownIcon fontSize="large" />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default HeroSection;
