import { Box, Button } from "@mui/material";
import "animate.css";
import cv from "../../assets/ABUANsteven-cv.pdf";

const Cta = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <h4>Hello, I'm</h4>
      <h1>Steven Abuan</h1>
      <h4>Front-end Developer</h4>
      <Box
        sx={{
          marginTop: "1rem",
        }}
      >
        <Button
          className="animate__animated animate__pulse animate_slower animate__infinite"
          download
          href={cv}
          variant="contained"
          size="medium"
          sx={{
            padding: "0.6rem",
            bgcolor: "secondary.main",
            marginRight: "1rem",
            "&:hover": {
              backgroundColor: "#e65100",
              color: "#fff",
            },
          }}
        >
          Download CV
        </Button>
        <Button
          href="#contact"
          variant="outlined"
          size="medium"
          color="inherit"
          sx={{ padding: "0.6rem" }}
        >
          Let's Talk
        </Button>
      </Box>
    </Box>
  );
};

export default Cta;
