import {
  Grid,
  Container,
  CardContent,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import Image1 from "../../assets/ecommerce-website.svg";
import Image2 from "../../assets/Images-bro.svg";
import Image3 from "../../assets/service.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Gallery website",
    description:
      "Dynamic website with CRUD functionalities using Javascript and Node JS for back-end",
    github: "https://github.com/stevenabuan/kumpas",
    demo: "https://kumpas.herokuapp.com/",
  },
  {
    id: 2,
    image: Image1,
    title: "Ecommerce website",
    description:
      "Dynamic website using React JS and Material UI for front-end and Firebase for back-end",
    github: "https://github.com/stevenabuan/kumpas",
    demo: "https://kumpas.herokuapp.com/",
  },
  {
    id: 3,
    image: Image3,
    title: "Services website",
    description:
      "Static website using HTML5, CSS3, Bootstrap for design and Vanilla Javascript",
    github: "https://github.com/stevenabuan/FinancialFreedom",
    demo: "https://stevenabuan.github.io/FinancialFreedom/",
  },
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop={6} fontSize="1.5rem" marginBottom={2}>
        Portfolio
      </Stack>
      <Grid container direction="row" justifyContent="center" marginBottom={8}>
        {data.map((data) => {
          const { id, image, title, description, github, demo } = data;
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={id}
              border="solid 1px #fff"
              sx={{
                borderRadius: "0",
              }}
            >
              <img
                style={{ height: "15rem", minWidth: "24rem" }}
                src={image}
                alt={title}
              />
              <CardContent>
                <Stack fontSize="1.2rem">{title}</Stack>
                <Stack>{description}</Stack>
              </CardContent>

              <Stack
                direction="row"
                padding={2}
                sx={{ justifyContent: "center", columnGap: "1rem" }}
              >
                <Button
                  target="_blank"
                  size="small"
                  variant="outlined"
                  color="inherit"
                  href={github}
                >
                  Github
                </Button>
                <Button
                  target="_blank"
                  size="small"
                  variant="contained"
                  color="warning"
                  href={demo}
                >
                  Live Demo
                </Button>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Divider color="#fff" />
    </Container>
  );
};

export default Portfolio;
