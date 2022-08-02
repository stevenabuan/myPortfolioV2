import { Stack, Container, Grid, Divider } from "@mui/material";
import Skills from "../skills/Skills";

import React from "react";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Grid container marginTop={6} marginBottom={2}>
        <Grid item xs={12} md={6}>
          <Stack marginTop={3} sx={{ fontSize: "1.5rem" }}>
            About me
          </Stack>
          <Stack textAlign="justify" marginTop={2}>
            Hey there! My name is Steven and I'm a front-end web developer. I
            love designing webpages. I'm focusing now on the front-end using
            React Js with Material UI/Bootstrap. I'm currently exploring other
            technologies to enhance my skills in which I will showcase my
            projects below.
          </Stack>
          <Stack marginTop="1rem">
            Here are the technologies I've been working with recently:
          </Stack>
        </Grid>
        <Grid marginTop={3} item xs={12} md={6} alignSelf="center">
          <Skills />
        </Grid>
      </Grid>
      <Divider color="#fff" />
    </Container>
  );
};

export default About;
