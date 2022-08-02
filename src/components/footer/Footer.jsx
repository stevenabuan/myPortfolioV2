import { Divider, Container, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop={8} marginBottom={4}>
        <Divider color="#fff" sx={{ marginBottom: "1rem" }} />
        <Stack paddingLeft={2}>
          <p>Copyright &copy; stevenabuan 2022</p>
          <p>All rights reserved.</p>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
