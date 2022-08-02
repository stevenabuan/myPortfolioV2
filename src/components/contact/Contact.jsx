import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Button, TextField, Grid, Stack } from "@mui/material/";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Socials from "../socials/Socials";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovdh04h",
        "template_ndncvwx",
        form.current,
        "7D_sJLZlZZz6OEzfc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container maxWidth="lg">
      <Grid container marginTop={6}>
        <Grid
          id="contact"
          component="form"
          ref={form}
          onSubmit={sendEmail}
          sx={{ padding: "1rem" }}
          item
          xs={12}
          md={6}
        >
          <Stack fontSize="1.5rem" marginBottom={2}>
            Let's Talk
          </Stack>

          <Stack spacing={2}>
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "orange" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "#fff",
                },
              }}
              required
              label="Name"
              name="name"
              variant="outlined"
              type="text"
            />

            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "orange" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "#fff",
                },
              }}
              required
              label="Email"
              name="email"
              variant="outlined"
              type="email"
            />

            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#fff" },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#fff",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "orange" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "orange",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "#fff",
                },
              }}
              required
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              type="text"
            />

            <Button
              sx={{
                maxWidth: "5rem",
                bgcolor: "#ef6c00",
                "&:hover": {
                  backgroundColor: "#e65100",
                  color: "#fff",
                },
              }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack
            fontSize="1.5rem"
            sx={{ padding: "1rem" }}
            paddingLeft={2}
            marginBottom={2}
          >
            Get in Touch
          </Stack>
          <Stack direction="row" spacing={2} paddingLeft={2} marginBottom={2}>
            <PhoneIcon />
            <p>+63 961340 5567</p>
          </Stack>
          <Stack direction="row" spacing={2} paddingLeft={2} marginBottom={2}>
            <EmailIcon />
            <p>stevenjosephabuan@gmail.com</p>
          </Stack>
          <Stack direction="row" spacing={2} paddingLeft={2} marginBottom={2}>
            <LocationOnIcon />
            <p>Taguig City</p>
          </Stack>

          <Socials />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
