import { Stack, Container, Grid, Divider } from "@mui/material";
import Skills from "../skills/Skills";

import React from "react";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Grid container marginTop={15} marginBottom={2}>
        <Grid item>
          <Stack marginTop={3} sx={{ fontSize: "1.5rem" }}>
            About me
          </Stack>
          <Stack marginTop={2}>
            Hey there! My name is Steven, a passionate front-end developer based
            in the Philippines. <br /> I'm a self-taught and creative web
            developer. I started coding on my own and recently finished a
            front-end development bootcamp. I want to create, explore and be
            part of the tech industry. I'm currently learning React Js with
            Material UI. I'm also exploring other technologies to enhance my
            skills in which I will showcase my projects below.
          </Stack>
          <Stack marginTop="1rem">
            Here are the technologies I've been working with recently:
          </Stack>
        </Grid>
        <Grid item xs={12} alignSelf="center">
          <Skills />
        </Grid>
      </Grid>
      <Divider color="#fff" />
    </Container>
  );
};

export default About;
